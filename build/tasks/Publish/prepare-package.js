"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = preparePackage;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _del = require("del");

var _del2 = _interopRequireDefault(_del);

var _makeDir = require("make-dir");

var _makeDir2 = _interopRequireDefault(_makeDir);

var _execLikeShell = require("./exec-like-shell");

var _execLikeShell2 = _interopRequireDefault(_execLikeShell);

var _extractTarball = require("./extract-tarball");

var _extractTarball2 = _interopRequireDefault(_extractTarball);

var _getNpmClient = require("./get-npm-client");

var _getNpmClient2 = _interopRequireDefault(_getNpmClient);

var _getTarballName = require("./get-tarball-name");

var _getTarballName2 = _interopRequireDefault(_getTarballName);

var _getTempDir = require("./get-temp-dir");

var _getTempDir2 = _interopRequireDefault(_getTempDir);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function preparePackage(pkg, pkgPath) {
  const npmClient = await (0, _getNpmClient2.default)();
  const tarballName = await (0, _getTarballName2.default)(pkg);

  const pkgTarballFilename = _path2.default.join(pkgPath, tarballName);

  const pkgTempDir = await (0, _getTempDir2.default)(pkg);
  await (0, _execLikeShell2.default)(`${npmClient} pack`, pkgPath);
  await (0, _del2.default)(`${pkgTempDir}/**`, {
    force: true
  });
  await (0, _makeDir2.default)(pkgTempDir);
  await (0, _extractTarball2.default)(pkgTarballFilename, pkgTempDir);
  await (0, _del2.default)(pkgTarballFilename);
}
//# sourceMappingURL=prepare-package.js.map