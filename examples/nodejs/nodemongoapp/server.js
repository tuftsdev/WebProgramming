var express = require('express');

var bodyParser = require('body-parser'); // Required if we need to use HTTP post parameters
var validator = require('validator'); // See documentation at https://github.com/chriso/validator.js
var app = express();
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP post parameters

// Mongo initialization and connect to database
// process.env.MONGODB_URI is the default environment variable on Heroku for the MongoLab add-on
// process.env.MONGOLAB_URI is the old environment variable on Heroku for the MongoLab add-on
// process.env.MONGOHQ_URL is an environment variable on Heroku for the MongoHQ add-on
// If environment variables not found, fall back to mongodb://localhost/nodemongoexample
// nodemongoexample is the name of the database
var mongoUri = process.env.MONGODB_URI || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/nodemongoexample';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

// Serve static content
app.use(express.static(__dirname + '/public'));

app.post('/feedme', function(request, response) {
	console.log(request.body);
	var foodItem = request.body.food;
	//foodItem = foodItem.replace(/[^\w\s]/gi, ''); // remove all special characters.  Can you explain why this is important?
	var toInsert = {
		"food": foodItem,
	};
	db.collection('fooditems', function(error, coll) {
		coll.insert(toInsert, function(error, saved) {
			if (error) {
				console.log("Error: " + error);
				response.send(500);
			}
			else {
				response.send('<html><head><title>Thanks!</title></head><body><h2>Thanks for your submission!</h2></body></html>');
			}
	    });
	});
});

app.get('/', function(request, response) {
	response.set('Content-Type', 'text/html');
	var indexPage = '';

	// Line 50: equivalent to `db.fooditems` in MongoDB client shell
	db.collection('fooditems', function(er, collection) {

		// Line 53: equivalent to `db.fooditems.find()` in MongoDB client shell
		collection.find().toArray(function(err, results) {

			// All results of db.fooditems.find() will go into...
			// ...`results`.  `results` will be an array (or list)
			if (!err) {
				indexPage += "<!DOCTYPE HTML><html><head><title>What Did You Feed Me?</title></head><body><h1>What Did You Feed Me?</h1>";
				for (var count = 0; count < results.length; count++) {
					indexPage += "<p>You fed me " + results[count].food + "!</p>";
				}
				indexPage += "</body></html>"
				response.send(indexPage);
			} else {
				response.send('<!DOCTYPE HTML><html><head><title>What Did You Feed Me?</title></head><body><h1>Whoops, something went terribly wrong!</h1></body></html>');
			}
		});
	});
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 3000);