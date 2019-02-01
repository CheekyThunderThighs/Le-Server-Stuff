var http = require('http');

function serverCallBack(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end("Hello world");
}

http.createServer(serverCallBack).listen(8080);
