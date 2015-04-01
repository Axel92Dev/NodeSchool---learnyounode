var fs = require('fs');
var path = require('path');

module.exports = function (path, extensionToFilter, callback) {
    fs.readdir(path, function (err, listOfFiles) {
        if (err)
            return callback(err);
        return callback(null, listOfFiles.filter(function (fileName) {
            return fileName.indexOf('.' + extensionToFilter) != -1;
        }));
    })
};
