var fs = require('fs');
var pathFile = process.argv[2];

fs.readFile(pathFile, 'utf-8', function (err, txtContent) {
    if (err) {
        console.log(err);
    }

    var numOfLines = txtContent.split('\n').length - 1;

    console.log(numOfLines);

});
