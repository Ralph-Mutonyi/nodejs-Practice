// exports keyword used

exports.myDateTime = function() {
    return Date();
};


var http = require('http');
var dt = require('./myDateTime');

http.createServer(function (req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.write("The date and time are currently" + dt.myDateTime())
    res.end();

}); listen (8080);
    