var http = require('http');
var toThePower = require('./to-the-power-module');

function onRequest(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(toThePower.moduleMessage);
  toThePower.logProduct(7, 3);
  response.end();
}

http.createServer(onRequest).listen(3000);
console.log('The server is running...');