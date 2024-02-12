const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello"); //res.send() won't work here
});

server.listen(PORT, () => {
  console.log("Server is running...!");
});
