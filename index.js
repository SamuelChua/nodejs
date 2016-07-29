var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    // use an if statement to check request.url
    // if url is "/", respond with hello world
    // else respond with 404 not found
    if (request.url === '/') {
        response.end("Hello World!");
    } else {
        response.end("404 NOT FOUND");
    }

});

console.log("Server running at http://127.0.0.1:8000");
server.listen(process.env.PORT || 8080);
