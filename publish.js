var ghPages = require("gh-pages");
var fs = require("fs");
var path = require("path");

var resolve = function(dir) { 
    return path.join(__dirname, dir)
};

var packageContents = fs.readFileSync(resolve("package.json"));
var package = JSON.parse(packageContents);

ghPages.publish("_book", {
    repo: package.repository.url
}, function(e) {
    console.log("Finished publishing");
});
