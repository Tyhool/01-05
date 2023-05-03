var http = require("http");

http.createServer(function (req, res) {
  res.end("<h1>bem vindo</h1>");
}).listen(8181);
console.log("Servidor no ar...");

// var MDC = require("./MDC");

// console.log(MDC.MDC(100,180));