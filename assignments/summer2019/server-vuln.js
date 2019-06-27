var express = require('express');
var bodyParser = require('body-parser');
var validator = require('validator');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/notuber';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

app.post('/rides', function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");

	var username = request.body.username;
	var lat = request.body.lat;
	var lng = request.body.lng;
	if (username != undefined && lat != undefined && lng != undefined && validator.isFloat(lat) && validator.isFloat(lng)) {
		lat = parseFloat(lat);
		lng = parseFloat(lng);
		if (lat >= -90.0 && lat <= 90 && lng >= -180 && lng <= 180) {
			var toInsert = {
				"username":username,
				"lat":lat,
				"lng":lng,
				"created_at":new Date()
			};
			var anHourAgo = new Date(new Date().getTime() - 1000 * 60 * 60);
			db.collection('passengers', function(errorCollection, collection) {
				collection.insert(toInsert, function (errorUpdate, result) {
					db.collection('vehicles', function(errorCollection, vehiclesCollection) {
						vehiclesCollection.find({"created_at": {$gt: anHourAgo}}).toArray(function(errorFind, vehicles) {
							response.send(vehicles);
						});
					});
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

app.post('/update', function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");

	var vehicles = ["JANET","NgfcWZmS", "tNEh59TC", "suFKyeZg", "VMerzMH8", "6tWDkKh6", "ajNnfhJj", "bCxY6mCw", "Cq4NX9eE", "mXfkjrFw", "EMYaM9D8", "nZXB8ZHz", "Tkwu74WC", "TnA763WN", "TaR8XyMe", "5KWpnAJN", "uf5ZrXYw"];
	var username = request.body.username;
	var lat = request.body.lat;
	var lng = request.body.lng;
	var results = {};
	if (username != undefined && lat != undefined && lng != undefined && validator.isFloat(lat) && validator.isFloat(lng)) {
		lat = parseFloat(lat);
		lng = parseFloat(lng);
		if (lat >= -90.0 && lat <= 90 && lng >= -180 && lng <= 180) {
			var toInsert = {
				"username":username,
				"lat":lat,
				"lng":lng,
				"created_at":new Date()
			};

			if (vehicles.indexOf(username) != -1) {
				db.collection('vehicles', function(errorCollection, collection) {
					collection.insert(toInsert, function (errorUpdate, result) {
						response.send('{"status":"Success"}');
					});
				});
			}
			else {
				response.send('{"error":"Access denied"}');
			}
		}
		else {
			response.send('{"error":"Access denied"}');
		}
	}
	else {
		response.send('{"error":"Access denied"}');
	}
});

app.get('/passenger.json', function(request, response) {
	var usernameEntry = request.query.username;
	if (usernameEntry == undefined || usernameEntry == null) {
		response.send("[]");
	}
	else {
		db.collection('passengers', function(error, collection) {
			collection.find({username:usernameEntry}).toArray(function(error, result) {
				if (!result) {
					response.send("[]");
				}
				else {
					response.send(result);
				}
			});
		});
	}
});

app.get('/vehicle.json', function(request, response) {
	var usernameEntry = request.query.username;
	if (usernameEntry == undefined || usernameEntry == null) {
		response.send("[]");
	}
	else {
		db.collection('vehicles', function(error, collection) {
			collection.find({username:usernameEntry}).toArray(function(error, result) {
				if (!result) {
					response.send("[]");
				}
				else {
					response.send(result);
				}
			});
		});
	}
});

app.get('/', function(request, response) {
	response.set('Content-Type', 'text/html');
	var indexPage = '';
	db.collection('passengers', function(error, collection) {
		collection.find().sort({"created_at":-1}).toArray(function(error, results) {
			if (!error) {
				indexPage += "<!DOCTYPE HTML><html><head><title>Not Uber</title></head><body><h1>Not Uber</h1><ul>";
				if (results.length == 0) {
					indexPage += "<li>No passengers</li>";
				}
				else {
					for (var count = 0; count < results.length; count++) {
						indexPage += "<li>" + validator.escape(results[count].username) + " requested a vehicle at " + results[count].lat + ", " + results[count].lng + " on " + results[count].created_at + "</li>";
					}
				}
				indexPage += "</ul></body></html>"
				response.send(indexPage);
			} else {
				response.send('<!DOCTYPE HTML><html><head><title>Not Uber</title></head><body><h1>Not Uber</h1><p>Whoops, something went terribly wrong!</p></body></html>');
			}
		});
	});
});

app.listen(process.env.PORT || 3000);