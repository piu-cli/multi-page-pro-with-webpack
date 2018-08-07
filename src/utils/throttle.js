/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 14:12:19
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 14:23:34
 */

/**
 * 函数节流
 */
export const throttle = (fn, wait = 1e3) => {
  let last
  return function ([...rest]) {
    const now = Date.now()
    if (!last || last - now > wait) {
      fn.call(this, rest)
      last = now
    }
  }
}
