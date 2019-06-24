var express = require('express');
var app = express();

/* HOW TO READ ROUTES USING EXPRESS FRAMEWORK:
app.HTTP_VERB('ROUTE NAME', function(request, response) {
  // Do stuff here...
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