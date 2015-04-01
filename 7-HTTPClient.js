var http = require('http');

http.get(process.argv[2], function (streamResp) {
    streamResp.setEncoding('utf8');

    streamResp.on('data', console.log);

    streamResp.on('error', console.error);


});
