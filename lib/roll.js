"use strict";

var dice = require("dice.js");

module.exports = function(argv) {
  var rollCommand = "";

  argv._.slice(1).forEach(function(elem) {
    rollCommand += elem;
  });
  var result = dice.roll(rollCommand);
  if (result.rightSide === 1) {
    console.log("Critical miss!");
  } else if (result.rightSide === 20) {
    console.log("Critical hit!");
  }
  console.log(+result);
};
