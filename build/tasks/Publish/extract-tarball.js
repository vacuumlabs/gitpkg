"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = extractTarball;

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _endOfStream = require("end-of-stream");

var _endOfStream2 = _interopRequireDefault(_endOfStream);

var _tarFs = require("tar-fs");

var _tarFs2 = _interopRequireDefault(_tarFs);

var _zlib = require("zlib");

var _zlib2 = _interopRequireDefault(_zlib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function extractTarball(tarballPath, destPath) {
  const stream = _fs2.default.createReadStream(tarballPath).pipe(new _zlib2.default.Unzip()).pipe(_tarFs2.default.extract(destPath));

  return new Promise((resolve, reject) => {
    (0, _endOfStream2.default)(stream, err => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
}
//# sourceMappingURL=extract-tarball.js.map