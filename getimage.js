var request = require("request");
var fs = require("fs");

request
  .get("https://sytantris.github.io/http-examples/future.jpg")
  .on("error", function(err) {
    throw err;
  })
  .on("response", function(response) {
    console.log(response.statusCode);
    console.log(response.statusMessage);
    console.log(response.headers["content-type"]);
    console.log("img downloaded...");
  })
  .pipe(fs.createWriteStream("./future.jpg"));

console.log("downloading img...");
