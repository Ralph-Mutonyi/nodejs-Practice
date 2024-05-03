// Formidable Module -- working with uploads 
// step 1 -- download and install using  --> npm install formidable

// step 2 -- include the module

// const formidable = require('formidable');

// create a nodejs file that writes an HTML form with an upload field

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url == '/fileupload'){
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files){
            var oldpath = files.filetoupload.filepath;
            var newpath = 'C:/users/ralph/' + 
        files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function(err){
                if(err) throw err;
                res.write('File Uploaded and moved!');
                res.end();
            });    
        });
    }else{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<form action = "fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"> <br>');
    res.write('<input type="submit">');
    res.write('</form>')
    return res.end();
    }   
}).listen(8080);