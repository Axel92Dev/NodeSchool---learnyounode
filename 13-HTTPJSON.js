var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var url = require('url');

var server = http.createServer(function (req, res) {
    var urlObj = url.parse(req.url, true);
    if (req.method == 'GET') {
        if (urlObj.pathname.indexOf('/api/parsetime') != -1) {
            if (urlObj.query && urlObj.query.iso) {
                var dataPassed = new Date(urlObj.query.iso);
                var jsonResp = {
                    hour: dataPassed.getHours(),
                    minute: dataPassed.getMinutes(),
                    second: dataPassed.getSeconds()
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify(jsonResp));
            }
        } else if (urlObj.pathname.indexOf('/api/unixtime') != -1) {
            if (urlObj.query && urlObj.query.iso) {
                var dataPassed = new Date(urlObj.query.iso);
                var jsonResp = {
                    unixtime: dataPassed.getTime()
                };
                res.writeHead(200, {
                    'Content-Type': 'application/json'
                });

                res.end(JSON.stringify(jsonResp));
            }
        }
    }
});

server.listen(process.argv[2]);
