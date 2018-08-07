/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:22:26
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 15:35:52
 */

const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.base')

const config = webpackMerge(baseConfig, {
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader'
          },
          use: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')(),
                  require('cssnano')()
                ]
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    }),
    new ExtractTextWebpackPlugin({
      filename: '[name].[hash:4].css'
    }),
    new webpack.DefinePlugin({
      'process.env': require('../config/prod')
    })
  ]
})

module.exports = config
