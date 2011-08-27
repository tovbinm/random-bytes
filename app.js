
/**
 * Module dependencies.
 */
require('nko')('tjR85kBUiEdHVXGx');

var express = require('express');

var app = module.exports = express.createServer(), io = require('socket.io').listen(app);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'Random Bytes'
  });
});

app.get('/donate',function(req, res){
  res.render('donate', {
		title:"Donation"
	});
});

app.listen(3000);


io.sockets.on('connection', function (socket) {
  console.log("socket started");
  console.log(socket.id);
  socket.emit('work', {});
  socket.on('done', function (data) {
    console.log("done");
    socket.emit('work', {});
  });
});
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
