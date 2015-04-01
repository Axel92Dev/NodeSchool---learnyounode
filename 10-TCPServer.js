var net = require('net');

function addZero(str) {
    str = '' + str;
    if (str.length == 1) {
        return '0' + str;
    }
    return str;
}
var server = net.createServer(function (socket) {
    var now = new Date();



    socket.end( now.getFullYear() + '-' +
               addZero(now.getMonth()+1) + '-' +
               addZero(now.getDate()) + ' ' +
               addZero(now.getHours()) + ':' + addZero(now.getMinutes()) + '\n'
    );
})
server.listen(process.argv[2]);

