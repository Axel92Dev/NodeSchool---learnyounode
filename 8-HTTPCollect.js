var http = require('http');

http.get(process.argv[2], function (streamResp) {
    streamResp.setEncoding('utf8');

    streamResp.on('error', console.error);

    var fileLetto = '';

    streamResp.on('data', function(data) {
        fileLetto += data;
    });

    streamResp.on('end', function() {
        console.log(fileLetto.length);
        console.log(fileLetto);
    });


});
