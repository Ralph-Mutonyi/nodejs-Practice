var http = require('http');
var uc = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(str.toupperCase("Hello World"));
    res.end();
}).listen(8080);

