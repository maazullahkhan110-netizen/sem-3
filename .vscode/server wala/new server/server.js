const http = require('http');
const Port = 3000; 

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/students") {
    res.end("Students Page");
  } else {
    res.end("Invalid Request");
  }
});
