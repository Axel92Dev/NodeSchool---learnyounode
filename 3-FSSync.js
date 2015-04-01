var fs = require('fs');
var pathFile = process.argv[2];

var txtContent = fs.readFileSync(pathFile).toString();
// fs.readFileSync(pathFile, 'utf-8');

var numOfLines = txtContent.split('\n').length - 1;

console.log(numOfLines);
