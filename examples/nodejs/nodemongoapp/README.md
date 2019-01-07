# Overview
A Node.js + Express + MongoDB web application.  There are two routes in this web application:

1. `POST /feedme` - takes in data from a client.  Data is stored into a MongoDB collection named `fooditems` in a database named `nodemongoexample`.  If data is stored successfully, sends an HTTP response of OK (status code 200), otherwise a 500. 
2. `GET /` - the home page.  This displays all the data stored in the MongoDB collection named `fooditems` in a database named `nodemongoexample`.

# About the Files
* `server.js` - the source of the server
* `package.json` -  This file holds various metadata relevant to the project. This file is used to give information to `npm` that allows it to identify the project as well as handle the project's dependencies (VERY important).  See https://docs.npmjs.com/files/package.json for more details on what goes in to a `package.json` file.
* `Procfile` - Required by Heroku.  A `Procfile` "is a mechanism for declaring what commands are run by your application's dynos on the Heroku platform."  In other words, it must specify which is the entry source file (i.e., the `server.js` file).  See https://devcenter.heroku.com/articles/procfile for more details.

# Running This Example Locally
1. Make sure the MongoDB database server is turned on.  If you are using the virtual machine, it should be already on, otherwise, run `sudo service mongod start`.  If you installed MongoDB via Homebrew on Mac OS X, run `mongod --config /usr/local/etc/mongod.conf` to start the MongoDB database server.  YOU MUST KEEP RUNNING the database server!
2. Run `npm install` to install all dependencies of the web application as listed in `package.json` file.
3. Run `node server.js` (or `nodejs server.js` on some Linux distributions) and LET IT KEEP RUNNING!

Please note: each time you add a dependency to the `package.json` file, you must re-run `npm install`.

# Sending Data to Server
Use `curl` to execute an HTTP POST request.  That is, send some data to the server.  Example: `curl --data "food=pizza" http://localhost:3000/feedme`

# Checking If Data Was Stored in MongoDB Collection
Go to `http://localhost:3000` on a web browser.  You should see "pizza" listed.

# Exercises
1. Explain why if you run `curl --data "fooditem=steaks" http://localhost:3000/feedme`, the data will not be stored correctly in MongoDB collection.
2. In reality, people generally do not send data to a server via command line tool such a `curl`, but using an HTML form.  Example: ordering something on Amazon.  Create an HTML form where one can type in a food item in a text box and upon clicking on a "Submit" button, the data is sent to server.