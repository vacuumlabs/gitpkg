"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = execLifecycleScript;

var _execLikeShell = require("./exec-like-shell");

var _execLikeShell2 = _interopRequireDefault(_execLikeShell);

var _getNpmClient = require("./get-npm-client");

var _getNpmClient2 = _interopRequireDefault(_getNpmClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function execLifecycleScript(script, pkg, pkgPath, onExecute = () => {}) {
  const npmClient = await (0, _getNpmClient2.default)();

  if (pkg.scripts[script]) {
    await (0, _execLikeShell2.default)(`${npmClient} run ${script}`, pkgPath);
    await onExecute();
  }
}
//# sourceMappingURL=exec-lifecycle-script.js.map