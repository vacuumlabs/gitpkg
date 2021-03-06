import findUp from 'find-up';
import fs from 'fs';
import path from 'path';
import util from 'util';
import { defaultTagNameFormat } from '../Publish/get-git-tag-name';

const access = util.promisify(fs.access);

/**
 * The name of the config file.
 */
export const configFileName = 'gitpkg.config.js';

/**
 * Here goes any default values.
 */
export const defaultConfig = {
  registry: null,
  getTagName: defaultTagNameFormat
};

export async function getNearestConfigFile() {
  // First check if config file is in same dir
  if (await access(path.resolve(process.cwd(), configFileName))) {
    return configFileName;
  }

  // Then check in parent directories
  return findUp(configFileName);
}

/**
 * Returns an object with configurable settings.
 *
 * @param {string} directory Path to config file.
 */
export default async function readConfig(configPath) {
  try {
    const configClass = await import(configPath);
    let config = {};

    if (typeof configClass.default === 'function') {
      config = configClass.default();
    } else if (typeof configClass === 'function') {
      config = configClass();
    }

    return Object.assign({}, defaultConfig, config);
  } catch (e) {
    return defaultConfig;
  }
}
