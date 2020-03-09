"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getTarballName;

var _getNpmClient = require("./get-npm-client");

var _getNpmClient2 = _interopRequireDefault(_getNpmClient);

var _normalisePackageName = require("./normalise-package-name");

var _normalisePackageName2 = _interopRequireDefault(_normalisePackageName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getTarballName(pkg) {
  const npmClient = await (0, _getNpmClient2.default)();
  const packageName = await (0, _normalisePackageName2.default)(pkg.name);

  if (npmClient === 'npm') {
    const filename = `${packageName}-${pkg.version}.tgz`;
    return filename;
  }

  const filename = `${packageName}-v${pkg.version}.tgz`;
  return filename;
}
//# sourceMappingURL=get-tarball-name.js.map