#!/usr/bin/env node

"use strict";

var argv = require("minimist")(process.argv.slice(2));
var dice = require("dice.js");

function printUsage() {
  console.log("A simple dice roller for use with dungeons and dragons.");
  console.log("-h | --help print this help message");
  console.log("-d | --dice roll a simple dice roll");
}

if (argv.d || argv.dice) {
  var result = dice.roll(argv.d || argv.dice);
  if (result.rightSide === 1) {
    console.log("Critical miss!");
  } else if (result.rightSide === 20) {
    console.log("Critical hit!");
  }
  console.log(+result);
} else if (argv.h || argv.help) {
  printUsage();
} else {
  console.error("Error: did not recognize options: " + JSON.stringify(argv));
  printUsage();
}
