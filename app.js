
/**
 * Module dependencies.
 */
require('nko')('tjR85kBUiEdHVXGx');

var express = require('express');
var knox = require('knox');

var app = module.exports = express.createServer(), io = require('socket.io').listen(app);
var s3_conf = require('config').s3
console.log(s3_conf)
var s3_client = knox.createClient({
    key: s3_conf.key
  , secret: s3_conf.secret
  , bucket: s3_conf.bucket
});
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
    title: 'Gridjs'
  });
});

app.get('/donate',function(req, res){
  res.render('donate', {
		title:"Donation"
	});
});

app.listen(process.env.NODE_ENV === 'production' ? 80 : 3000);



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
