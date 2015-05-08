/**
 * Created by derris on 8/05/15.
 */



var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');

}).listen(2040, '127.0.0.1');

console.log('Server running at http://127.0.0.1:2040/');
