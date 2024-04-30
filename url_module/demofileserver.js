var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var q  = url.parse(req.url, true);
    var filename = "." + q.pathname; // constructs a file path by adding a '.' to begining of the path. 
    fs.readFile(filename, function(err, data){ // reads the content specified by the path. 
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end()
    });
}).listen(8080);