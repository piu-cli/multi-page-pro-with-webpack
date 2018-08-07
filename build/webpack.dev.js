/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:22:19
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 11:22:19
 */

const webpackMerge = require('webpack-merge')
const path = require('path')
const baseConfig = require('./webpack.base')

const config = webpackMerge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    inline: true,
    port: 9000,
    host: '127.0.0.1'
  },
  plugins: [
  ]
})

module.exports = config
