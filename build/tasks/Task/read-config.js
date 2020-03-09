"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultConfig = exports.configFileName = undefined;
exports.getNearestConfigFile = getNearestConfigFile;
exports.default = readConfig;

var _findUp = require("find-up");

var _findUp2 = _interopRequireDefault(_findUp);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

var _getGitTagName = require("../Publish/get-git-tag-name");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const access = _util2.default.promisify(_fs2.default.access);
/**
 * The name of the config file.
 */


const configFileName = exports.configFileName = 'gitpkg.config.js';
/**
 * Here goes any default values.
 */

const defaultConfig = exports.defaultConfig = {
  registry: null,
  getTagName: _getGitTagName.defaultTagNameFormat
};

async function getNearestConfigFile() {
  // First check if config file is in same dir
  if (await access(_path2.default.resolve(process.cwd(), configFileName))) {
    return configFileName;
  } // Then check in parent directories


  return (0, _findUp2.default)(configFileName);
}
/**
 * Returns an object with configurable settings.
 *
 * @param {string} directory Path to config file.
 */


async function readConfig(configPath) {
  try {
    const configClass = await Promise.resolve().then(() => _interopRequireWildcard(require(`${configPath}`)));
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
//# sourceMappingURL=read-config.js.map