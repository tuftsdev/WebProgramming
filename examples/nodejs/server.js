var http = require("http");
var url = require("url");

http.createServer(function(request, response) {
	
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");

	// Rips out HTTP GET query string
	var query = url.parse(request.url).query;
	console.log("Query " + query + " received.");

	// Sends HTTP status 200
	response.writeHead(200, {"Content-Type": "text/plain"});

	// Handle certain path requests
	if (pathname == "/pikachu") {
		response.write("You've won the game!");
	}
	else {
		response.write("Hello World");
	}
	response.end();

    }).listen(8888);