import fs from 'node:fs';
import path from 'node:path';

import { mkdirp } from 'mkdirp';
import untildify from 'untildify';

let config = { aliases: {} };
let loaded = false;

export default {
  getConfigFilePath(configPath = '~/.dnd-roller') {
    const persistenceDir = untildify(configPath);
    const configFilePath = path.join(persistenceDir, 'config.json');

    return configFilePath;
  },

  getConfig: function (configPath) {
    if (loaded) {
      return config;
    }

    const configFilePath = this.getConfigFilePath(configPath);

    try {
      const stats = fs.lstatSync(persistenceDir);
      if (stats.isDirectory()) {
        config = JSON.parse(fs.readFileSync(configFilePath));
      }
    } catch (e) { 
    /**
     * don't create a file if there is none -- users who don't want to use the
     * alias feature shouldn't have a file created for them.
     */
    }
    loaded = true;
    return config;
  },

  saveConfig: function (configPath, newConfig) {
    config = newConfig;
    const configFilePath = this.getConfigFilePath(configPath);
    mkdirp.sync(path.dirname(configFilePath));
    fs.writeFileSync(configFilePath, JSON.stringify(newConfig));
  },

  isValid: function (newConfig) {
    return newConfig.aliases && typeof newConfig.aliases === 'object';
  }
};
