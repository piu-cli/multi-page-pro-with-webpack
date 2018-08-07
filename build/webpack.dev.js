/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:22:19
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 15:36:05
 */

const webpackMerge = require('webpack-merge')
const webpack = require('webpack')
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
    contentBase: path.join(__dirname, '../dist'),
    open: true,
    inline: true,
    port: 9001,
    host: '127.0.0.1'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev')
    })
  ]
})

module.exports = config
