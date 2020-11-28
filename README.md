# BroadcastAsCF
### You can broadcast messages like Codeforces'.

### Check out at
https://leed.at/leed/board/leedRead.php?boardid=107

## 1. Put div in header
```html
<!--broadcast in site-->
<div id="bcast"></div>
```
This code will receive the message from server.

## 2. Include bcast.js file in all pages
```javascript
var socket = io.connect('NODEJS_SERVER_ADDRESS');
socket.on('connect', function () {
  socket.on('msg', (data)=>{
    $('#bcast').append('<script>alert("' + data.msg + '");</'+data.type+'>');
  })
});
```
io.connect will set connection to the server and receive message from server and socket.on('msg') event will receive message from server.

## 3. Let's set nodejs server (server_side.js)
```javascript
var io = socketio();
io.attach(server);
io.on('connection', (socket) => {

});

app.use('/get', (req, res)=>{
    io.emit('msg', {
        msg: req.query.msg,
        type:'script'
    })
```
I set '/get' a router for emitting message.
Whenever I enter http://server_address/get?msg=welcome , io.emit('msg') event will receive the message and send 'msg' event to the client side.
