var socket = io.connect('NODEJS_SERVER_ADDR');
socket.on('connect', function () {
  socket.on('msg', (data)=>{
    $('#bcast').append('<script>alert("' + data.msg + '");</'+data.type+'>');
  })
});
