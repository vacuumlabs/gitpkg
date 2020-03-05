// Example content of gitpkg.config.js
module.exports = () => ({
  registry: 'git@github.com:vacuumlabs/gitpkg-public-registry.git',
  getTagName: pkg => `gitpkg-v${pkg.version}`
});
