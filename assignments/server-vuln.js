var express = require('express');
var bodyParser = require('body-parser');
var validator = require('validator');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var compress = require('compression');
app.use(compress());

var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/defense-in-derpth';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

app.post('/sendLocation', function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");

	var login = request.body.login;
	var lat = request.body.lat;
	var lng = request.body.lng;
	var results = {};
	if (login != undefined && lat != undefined && lng != undefined && validator.isFloat(lat) && validator.isFloat(lng)) {
		lat = parseFloat(lat);
		lng = parseFloat(lng);
		if (lat >= -90.0 && lat <= 90 && lng >= -180 && lng <= 180) {
			var toInsert = {
				"login":login,
				"lat":lat,
				"lng":lng,
				"created_at":new Date()
			};
			db.collection('locations', function(error, collection) {
				collection.insert(toInsert, function (errorUpdate, result) {
					if (!error) {
						collection.find().sort({"_id":-1}).toArray(function(errorQuery, people) {
							if (!errorQuery) {
								results.people = people;
								response.send(results);
							}
							else {
								response.send('{"error":"Whoops, something is wrong with the database connection"}');
							}
						});
					}
					else {
						response.send('{"error":"Whoops, something is wrong with the database connection"}');
					}
				});
			});
		}
		else {
			response.send('{"error":"Whoops, something is wrong with your data!"}');
		}
	}
	else {
		response.send('{"error":"Whoops, something is wrong with your data!"}');
	}
});

app.get('/checkins.json', function(request, response) {
	var loginEntry = request.query.login;
	if (loginEntry == undefined || loginEntry == null) {
		response.send("[]");
	}
	else {
		db.collection('locations', function(error, collection) {
			collection.find({login:loginEntry}).toArray(function(error, results) {
				if (!results) {
					response.send("[]");
				}
				else {
					response.send(results);
				}
			});
		});
	}
});

app.get('/', function(request, response) {
	response.set('Content-Type', 'text/html');
	var indexPage = '';
	db.collection('locations', function(error, collection) {
		collection.find().sort({"_id":-1}).toArray(function(error, results) {
			if (!error) {
				indexPage += "<!DOCTYPE HTML><html><head><title>Not Foursquare</title></head><body><h1>Not Foursquare</h1><ul>";
				if (results.length == 0) {
					indexPage += "<li>No check-ins</li>";
				}
				else {
					for (var count = 0; count < results.length; count++) {
						indexPage += "<li>" + results[count].login + " checked in at " + results[count].lat + ", " + results[count].lng + " on " + results[count].created_at + "</li>";
					}
				}
				indexPage += "</ul></body></html>"
				response.send(indexPage);
			} else {
				response.send('<!DOCTYPE HTML><html><head><title>Not Foursquare</title></head><body><h1>Not Foursquare</h1><p>Whoops, something went terribly wrong!</p></body></html>');
			}
		});
	});
});

app.listen(process.env.PORT || 3000);