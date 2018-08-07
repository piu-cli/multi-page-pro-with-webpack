/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 12:21:22
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 12:33:31
 */
/**
 * 函数防抖
 * @argument fn {Function} 绑定的回调函数
 * @argument wait {Number} 防抖频率(抖动周期)
 */
export const debounce = (fn, wait = 1e3) => {
  let timer
  return function ([...rests]) {
    const context = this
    const args = rests
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.call(context, args)
      timer = null
    }, wait)
  }
}
