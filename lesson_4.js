//HTTP Example
// var http = require("http");

// var server = http.createServer(function (req, res) {
//   console.log("This will print in the server console.");
//   console.log(req.url);
//   res.end("This will print on the webpage localhose:3000");
// });

// server.listen(3000);

//URL Example
var http = require("http");
var url = require("url");

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
});

server.listen(3000);
