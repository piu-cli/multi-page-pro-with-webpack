/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:22:14
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-08 17:17:48
 */

const path = require('path')
const webpack = require('webpack')
const createPages = require('./createPages')
const { dependencies } = require('../package.json')

module.exports = {
  entry: {
    vender: Object.keys(dependencies),
    ...createPages.createEntry()
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:4].js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      minChunks: 2,
      chunks: Object.keys(createPages.createEntry())
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vender', 'manifest'],
      minChunks: Infinity
    }),
    ...createPages.createPlugin()
  ]
}
