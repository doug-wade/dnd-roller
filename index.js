#!/usr/bin/env node

import { Command } from 'commander';

import alias from './commands/alias.js';
import roll from './commands/roll.js';
import pkgJson from './package.json' assert { type: 'json' };

const program = new Command();

program
  .name('dnd-roller')
  .description('A CLI tool for rolling dice.')
  .version(pkgJson.version);

program.command('alias', { isDefault: false })
  .description('Create an alias for a dice roll')
  .argument('<name>', 'the name of the alias')
  .argument('<roll>', 'the dice roll to alias')
  .option('--config-path', 'an alternate path to the config file', '~/.dnd-roller')
  .action(alias);

program.command('roll', { isDefault: true })
  .description('Roll some dice')
  .argument('[dice]', 'dice to roll', '1d20')
  .option('--config-path', 'an alternate path to the config file', '~/.dnd-roller')
  .action(roll);

program.parse();
