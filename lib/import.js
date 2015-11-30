"use strict";

var fs = require("fs");
var path = require("path");

module.exports = function(argv) {
  var filepath = argv._[1];
  var filename = path.basename(filepath);
  var charactersDirectory = "characters";
  var dest = path.join(charactersDirectory, filename);

  if (!fs.existsSync(charactersDirectory)) {
    fs.mkdirSync(charactersDirectory);
  }

  fs
    .createReadStream(filepath)
    .pipe(fs.createWriteStream(dest));
};