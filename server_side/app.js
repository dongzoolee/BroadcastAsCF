var express = require('express');
var app = express();
var fs = require('fs');
var socketio = require('socket.io');

var server = app.listen(3335, () => {
    console.log('server has started on port 3335');
});

var io = socketio();
io.attach(server);
io.on('connection', (socket) => {

});

app.use('/get', (req, res) => {
    io.emit('msg', {
        msg: req.query.msg,
        type: 'script'
    })
})
