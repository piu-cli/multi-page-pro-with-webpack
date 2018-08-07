/**
 * @Author: 罗圈圈
 * @Date: 2018-08-07 11:27:01
 * @Last Modified by: 罗圈圈
 * @Last Modified time: 2018-08-07 12:19:24
 */
const cache = {}

export const queryURLParmeter = (name) => {
  if (name in cache) return cache[name]
  const s = window.location.search.slice(1)
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`)
  const ret = s.match(reg)
  return ret ? [,, cache[name]] = ret : null
}
