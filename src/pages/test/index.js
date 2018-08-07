/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:22:39
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 15:35:04
 */

require('babel-polyfill')

require('./style.less')

console.log(`当前时间 ${Date.now()}: debug 的数据是 process.env: `, process.env)
