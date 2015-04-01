var fs = require('fs');
var pathFile = process.argv[2];
var extensionToFilter = '.' + process.argv[3];

fs.readdir(pathFile, function (err, listOfFiles) {
    if (err) {
        console.log(err);
    }

    console.log(listOfFiles.filter(function(path){
        return path.indexOf(extensionToFilter) != -1;
    }).join('\n'));

});

//  var fs = require('fs')
//    var path = require('path')
//
//    fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })
