const http = require('http');
const fs   = require('fs');
const path = require("path");
var Client = require('ssh2').Client;

const PORT = process.env.PORT || 3000;

const server = http.createServer(({ url }, response) => {
    response.setHeader("Content-Type", "text/html");
    if (url == "/") fs.createReadStream("./slideshow.html").pipe(response);
    else {
      const filePath = path.join(__dirname, url);
      const stats = fs.existsSync(filePath);
      if (stats) fs.createReadStream(filePath).pipe(response);
    }
  });

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
