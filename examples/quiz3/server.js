var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/foxtrot', function (foo, bar) {
  var password = foo.query.password;
  if (password == 'Tango') {
    bar.send("Access granted");
  }
  bar.send("Access denied!");
});
app.post('/foxtrot', function (foo, bar) {
  var password = foo.body.password;
  if (password == 'Tango') {
    bar.send("Woot");
  }
});
app.get('/', function(foo, bar) {
  foo.send("Easter egg...");
});
app.get('/s3cr3t', function(foo, bar) {
  bar.send("...secret about box");
});
app.listen(4545);