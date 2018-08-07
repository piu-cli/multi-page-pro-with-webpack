/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:21:59
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 14:29:05
 */

export const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'

const config = require(`./${env}.js`)

export default { ...config }
