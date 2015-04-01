var http = require('http');
var arrayOfResp = [];
var i = 0;
var finito = 0;

for (i = 0; i < 3; i++) {
    (function (index) {

        http.get(process.argv[2 + index], function (streamResp) {
            streamResp.setEncoding('utf8');

            streamResp.on('error', console.error);

            var fileLetto = '';

            streamResp.on('data', function (data) {
                fileLetto += data;
            });

            streamResp.on('end', function () {
                arrayOfResp[index] = (fileLetto);
                finito++;

                if (finito == 3) {
                    console.log(arrayOfResp.join('\n'));
                }
            });

        });

    })(i);
};
