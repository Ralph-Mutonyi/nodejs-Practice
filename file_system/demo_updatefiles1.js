// appends the specified content at the end of specified file
var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'This is my new text', function(err){
    if (err) throw err;
    console.log("Updated!");
});