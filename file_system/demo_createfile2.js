// open()
// takes a flag as second arguement. 

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function(err, file ){ // if flag is 'w' for writing, specified is open for writing
    if (err) throw err;
    console.log('saved!');
});

