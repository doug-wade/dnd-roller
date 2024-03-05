import dice from 'dice.js';

import configManager from '../lib/config-manager.js';

/**
 * Rolls a dice roll.
 * Usage:
 *      dnd roll 1d12 + 9
 */
export default function roll(rollCommand, { configPath }) {
  const userConfig = configManager.getConfig(configPath);

  let result;
  if (userConfig.aliases[rollCommand]) {
    result = dice.roll(userConfig.aliases[rollCommand]);
  } else {
    result = dice.roll(rollCommand);
  }

  if (result.rightSide === 1) {
    console.log('Critical miss!');
  } else if (result.rightSide === 20) {
    console.log('Critical hit!');
  }

  console.log(+result);
};
