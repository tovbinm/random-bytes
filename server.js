require('nko')('tjR85kBUiEdHVXGx');


var CONFIG = require('config');
var MDB = require('./db/mongod').MDB;

//Mongo db client
var mdb = new MDB();

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
    res.send('Hello, duude');
});

app.listen(3000);