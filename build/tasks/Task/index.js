"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = require("events");

var _events2 = _interopRequireDefault(_events);

var _readPackageManifest = require("./read-package-manifest");

var _readPackageManifest2 = _interopRequireDefault(_readPackageManifest);

var _readConfig = require("./read-config");

var _readConfig2 = _interopRequireDefault(_readConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const EventEmitter = _events2.default.EventEmitter;

class Task extends EventEmitter {
  constructor() {
    super();
    this.pkg = null;
    this.config = _readConfig.defaultConfig;
  }

  async readPackageManifest(pkgPath) {
    this.pkg = await (0, _readPackageManifest2.default)(pkgPath);
  }

  async readConfigFile(configPath) {
    this.config = await (0, _readConfig2.default)(configPath);
  }

}

exports.default = Task;
//# sourceMappingURL=index.js.map