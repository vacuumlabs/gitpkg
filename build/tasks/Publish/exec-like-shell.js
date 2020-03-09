"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = execLikeShell;

var _execa = require("execa");

var _execa2 = _interopRequireDefault(_execa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function execLikeShell(command, cwd) {
  const [program, ...options] = command.split(' ');
  return (0, _execa2.default)(program, options, {
    cwd
  });
}
//# sourceMappingURL=exec-like-shell.js.map