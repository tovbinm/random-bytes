$(document).ready(function(){
    var socket = io.connect('http://localhost');
    socket.on('work', function (data) {
    console.log("working!!");
    setTimeout(function(){
    	console.log("done!!");
    	socket.emit('done', { my: 'data' });},5000
    );
  });

});
