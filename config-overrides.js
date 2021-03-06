const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
const path = require('path')
const paths = require('react-scripts/config/paths')
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  addWebpackAlias({
    '@': resolve('src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    style: 'css'
  })
)
