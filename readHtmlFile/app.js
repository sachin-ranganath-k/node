const http = require("http");
const fs = require("fs"); //File Stream
const PORT = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("./htmlFiles/index.html", (error, data) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(data);
      });
      break;

    case "/hello":
      fs.readFile("./htmlFiles/hello.html", (error, data) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end(data);
      });
      break;

    default:
        res.statusCode = 200;
        res.setHeader("Content-type", "text/html");
        res.end('Not Found..!')
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
