/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:22:14
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 11:22:14
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/pages/test/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'demo.js'
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
    new HtmlWebpackPlugin()
  ]
}
