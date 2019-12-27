var http = require('http')

var io

module.exports = {
    createSocket: function(app) {
        var server = http.createServer(app)
        var io = require('socket.io')(server);
    },
    io: io
}