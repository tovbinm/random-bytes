require('nko')('tjR85kBUiEdHVXGx');


var CONFIG = require('config');


// Module dependencies.
var express = require('express');
var app = express.createServer();

// Configuration
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
app.get('/', function(req, res) {
    res.send('Hello, ' + CONFIG.mongod.host);
});

app.listen(3000);