var myModule = require('./6-Module');

myModule(process.argv[2], process.argv[3], function (err, listOfFiles) {
    console.log(listOfFiles.join('\n'));
});
