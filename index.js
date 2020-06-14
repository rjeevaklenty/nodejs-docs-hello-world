const http = require('http');
var url = require('url');

const server = http.createServer((request, response) => {
    var urlParsed = url.parse(request.url, true);
    if (urlParsed.pathname === '/hi') {
        response.end("Hi World!");   
    } else if (urlParsed.query.name) {
        response.end('Hello ' + urlParsed.query.name + '\n');
    }
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(process.env.NODE_ENV + '\n')
    response.end("Hello World!");
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
