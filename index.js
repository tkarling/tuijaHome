var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
var config = require('./config.js');

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(cors());


var server = app.listen(config.portNum, function() {
    console.log("Listening at address", server.address());
});