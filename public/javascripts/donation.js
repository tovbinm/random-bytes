$(document).ready(function(){
    var socket = io.connect('http://localhost');
      var paused = false;
$("#pause").click(function(){
       if (paused){
		socket.emit('done', { my: 'data' })
		$(this).html("pause");	
       }
	else{
		$(this).html("resume");
        }
       paused=!paused
	
       
   });
    socket.on('work', function (data) {
    console.log("working!!");
    $("#status").html("<p>working!!</p>");
    $("#status").toggleClass("working idle")
    setTimeout(function(){
    	console.log("done!!");
        $("#status").html("<p>idle!!</p>");
	$("#status").toggleClass("working idle")
        if (!paused){
    		socket.emit('done', { my: 'data' });
	}
       },5000
    );
  });

  

});
