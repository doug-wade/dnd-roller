"use strict";

module.exports = function() {
  console.log("A simple dice roller for use with dungeons and dragons. Broken into sub commands, invoked under dnd: ");
  console.log("    roll    a simple dice roll.  Ex. dnd roll 1d20 + 7");
  console.log("    import  import a new character sheet.  Ex. dnd import fighter.json");
  console.log("    help    (also: -h or --help) print this help message.  Ex. dnd help");
};
