"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = readPackageManifest;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _semver = require("semver");

var _semver2 = _interopRequireDefault(_semver);

var _util = require("util");

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const readFile = _util2.default.promisify(_fs2.default.readFile);

async function readPackageManifest(pkgPath) {
  const packagePath = _path2.default.resolve(pkgPath, 'package.json');

  const pkg = JSON.parse((await readFile(packagePath, 'utf-8')));
  pkg.scripts = pkg.scripts || {};
  validatePackageJSON(pkg);
  return pkg;
}

function validatePackageJSON(pkg) {
  if (!pkg.name) {
    throw new Error("Package doesn't have a name.");
  }

  if (!pkg.version) {
    throw new Error("Package doesn't have a version.");
  }

  if (!_semver2.default.valid(pkg.version)) {
    throw new Error('Invalid semver version.');
  }
}
//# sourceMappingURL=read-package-manifest.js.map