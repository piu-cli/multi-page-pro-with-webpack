import axios from 'axios'

export const request = axios.create({
  timeout: 80000,
  baseURL: process.env.baseUrl
})
// request 拦截器
request.interceptors.request.use(async (config) => {
  if (config.method.toLowerCase() === 'post') {
    config.data = JSON.stringify(config.data)
  } else {
    config.params = config.data
    config.data = null
  }
  return config
},
err => Promise.reject(err))

// response 拦截器
request.interceptors.response.use((response) => {
  const { data } = response
  return data
},
err => Promise.reject(err))
