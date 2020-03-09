"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTempDir;

var _os = require("os");

var _os2 = _interopRequireDefault(_os);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _normalisePackageName = require("./normalise-package-name");

var _normalisePackageName2 = _interopRequireDefault(_normalisePackageName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getTempDir(pkg) {
  const packageNameNormalised = await (0, _normalisePackageName2.default)(pkg.name);

  const tempDir = _path2.default.join(_os2.default.tmpdir(), 'gitpkg', `${packageNameNormalised}-${pkg.version}`);

  return tempDir;
}
//# sourceMappingURL=get-temp-dir.js.map