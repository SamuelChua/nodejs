var http = require('http');
var counter = 0;
// TODO: use mongoDB to store the counter info
// so that when the server is restarted, the information
// persists.

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    // use an if statement to check request.url
    // if url is "/", respond with hello world
    // else respond with 404 not found
    if (request.url === '/') {
		counter += 1;
        response.end("This page has been accessed " + counter + " times.");
    } else {
        response.end("404 NOT FOUND");
    }

});

console.log("Server running at http://127.0.0.1:8080");
server.listen(process.env.PORT || 8080);
