const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const titleConfig = require('../src/views/titleConfig.json')

const pages = fs.readdirSync(path.resolve(__dirname, '../src/pages')).filter(item => item !== 'common')

module.exports = {
  createPlugin() {
    return pages.map(page => new HtmlWebpackPlugin({
      template: `./src/views/${page}.html`,
      filename: `html/${page}.html`,
      title: titleConfig[page],
      inject: true,
      hash: true,
      chunks: ['manifest', 'vender', page]
    }))
  },
  createEntry() {
    const ret = {}
    pages.forEach((page) => {
      ret[page] = `./src/pages/${page}/index.js`
    })
    return ret
  }
}
