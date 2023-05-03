var MDC = require("./MDC1");
var http = require("http");

http.createServer(function (req, res) {
  res.end("<h1>bem vindo</h1>");
}).listen(8181);
console.log("Servidor no ar...");
console.log(MDC.MDC1(100,180));
