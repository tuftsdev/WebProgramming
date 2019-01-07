var express = require('express');
var app = express();
// See https://stackoverflow.com/questions/5710358/how-to-get-post-query-in-express-node-js
var bodyParser = require('body-parser')
app.use(bodyParser.json());
// See https://stackoverflow.com/questions/25471856/express-throws-error-as-body-parser-deprecated-undefined-extended
app.use(bodyParser.urlencoded({ extended: true })); // Required if we need to use HTTP post parameters

app.post("/echo", function(request, response) {
	console.log("In the server...");
	console.log(request.body);
	var firstName = request.body.firstname;
	var lastName = request.body.lastname;
	response.send("Hello " + firstName + " " + lastName + "!");
});

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 8888);