$(document).ready(function(){
    var socket = io.connect('/viewers');
    socket.on('status', function (data) {
      $('#num_of_slots').html(data.slots); 
      setTimeout(function(){
        socket.emit('status');
      },5000);
    });
});