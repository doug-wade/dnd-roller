'use strict';

import configManager from '../lib/config-manager.js';

/**
 * Create an alias for a dice roll.
 * Usage:
 *     dnd-roller alias reflex 1d20+5
 */
export default function (name, roll, { configPath }) {
  const userConfig = configManager.getConfig(configPath);
  userConfig.aliases = userConfig.aliases || {};
  userConfig.aliases[name] = roll;
  configManager.saveConfig(configPath, userConfig);
  console.log('successfully created alias!');
};
