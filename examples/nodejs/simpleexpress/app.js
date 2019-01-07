var express = require('express');
var app = express();

/* HOW TO READ:

app.HTTP_VERB('/ROUTE_NAME', function(request, response) {
	// Do stuff here...
	response.send("SOMETHING TO RESPONSE");	
});
*/

app.get('/', function(request, response) {
	response.send("Hello world");
});

app.get('/pikachu', function(request, response) {
	response.send("You've won the game!");
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 8888);