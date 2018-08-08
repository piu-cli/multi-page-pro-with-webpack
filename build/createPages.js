const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const titleConfig = require('../src/views/titleConfig.json')

const pages = fs.readdirSync(path.resolve(__dirname, '../src/pages'))

module.exports = {
  createPlugin() {
    return pages.map(page => new HtmlWebpackPlugin({
      template: page === 'home' ? `./src/views/${page}.html` : `./src/view/${page}/${page}.html`,
      filename: page === 'home' ? `${page}.html` : `views/${page}.html`,
      title: titleConfig[page],
      inject: true,
      hash: true,
      favicon: './favicon.ico',
      chunks: ['common', page]
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
