/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:23:04
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 11:23:04
 */

export const sleep = (timeout = 1e3) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, timeout)
})
