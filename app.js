/**
 * Created by derris on 8/05/15.
 */


var restify = require('restify');

var server = restify.createServer();

server.get(/.*/, restify.serveStatic({
    directory: './public/',
    'default': 'index.html'
}));

server.listen(8124, function () {
    console.log('%s listening at %s', server.name, server.url);
});
