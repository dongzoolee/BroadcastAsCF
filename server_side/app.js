var express = require('express');
var app = express();
var fs = require('fs');
var socketio = require('socket.io');
var https = require('https');
try {
    var option = {
        cert: fs.readFileSync('fullchain.pem'),
        key: fs.readFileSync('privkey.pem')
    }
    var server = https.createServer(option, app).listen(3335, () => {
        console.log('server has started on port 3335');
    });
} catch (err) {
    console.log('an error has occurred');
    console.warn(err);
}

var io = socketio();
io.attach(server);
io.on('connection', (socket) => {

});

app.use('/get', (req, res)=>{
    io.emit('msg', {
        msg: req.query.msg,
        type:'script'
    })
})
