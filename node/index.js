const http = require("http");

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.write("<body><h1>Hello</h1></body>");
    res.end();
  })
  .listen(3000);
