'use strict';

var fs = require('fs');
var path = require('path');

/**
 * Imports a character.
 * Usage:
 *      dnd import /path/to/file.json
 */
module.exports = function (argv) {
  var filepath = argv._[1];
  var filename = path.basename(filepath);
  var charactersDirectory = 'persist/characters';
  var dest = path.join(charactersDirectory, filename);

  /*
  "fs.existsSync(path)" has been depreciated.  It's probably a good idea to shift
  this to the more current 'fs.accessSync(path, fs.F_OK)'.
  OLD CODE:
  ---
    if (!fs.existsSync(charactersDirectory)) {
      fs.mkdirSync(charactersDirectory);
    }
  ---
  */
  //--- new code
  //fs.R_OK checks to see if the file can be read and fs.W_OK checks if it can be written
  //the previous version only
    fs.access(charactersDirectory, fs.F_OK, function(err) {
        // function(err) populates an error to err if there is not able to read the file.
        if (err) {
            fs.mkdirSync(charactersDirectory);
        }
  });
  //-- end of new code
  fs
    .createReadStream(filepath)
    .pipe(fs.createWriteStream(dest));
};
