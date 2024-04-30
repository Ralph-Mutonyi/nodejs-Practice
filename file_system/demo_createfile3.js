// writefile()
// replaces the specified file and content if it exits
// if it doesnt exits a newfile is created containing specified content.

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello Content!', function(err){
  if (err) throw err;
  console.log('Saved!') ; 
});
