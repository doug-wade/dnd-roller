'use strict';

var config = require('../lib/config');
var inquirer = require('inquirer');

/**
 * Set up configuration for dnd
 * Usage:
 *     dnd init
 *     # Interactive commands walk you through setting config
 */
module.exports = function (callback) {
  inquirer.prompt([
    {
      default: 'Pathfinder',
      name   : 'variant',
      message: 'Please enter your variant',
      type   : 'list',
      choices: ['Pathfinder', new inquirer.Separator(), '3.5']
    }
  ], (answers) => {
    var tempConfig = config.getConfig();
    Object.keys(answers).forEach(function (key) {
      tempConfig[key] = answers[key];
    });
    config.saveConfig(tempConfig);
    callback();
  });
};
