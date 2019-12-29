exports = module.exports = function(io) {
    io.on('connection', (socket) => {
        console.log("SOCKETIO connection EVENT: ", socket.id, " client connected");
        // 여기서부터 socket에 대한 이벤트를 작성하면 된다.
        socket.on("event1", function(msg) {
            console.log("SOCKETIO event1 EVENT: msg: ", msg);
        })
    })
};