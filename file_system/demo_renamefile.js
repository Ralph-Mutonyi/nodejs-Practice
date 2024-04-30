// fs.rename();
// renames a specified file

var fs = require('fs');

fs.rename('mynewfile3.txt', 'mynewfile2.txt', function(err){
    if (err) throw error;
    console.log('File Renamed');
});
