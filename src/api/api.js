import axios from 'axios'
require('babel-plugin-transform-node-env-inline')
const env = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
const host = env === 'prod' ? 'http://prod/api' : 'http://dev/api'

axios.defaults.baseURL = host
axios.defaults.timeout = 100000 // 超时时间
axios.defaults.withCredentials = true // 允许跨域携带cookie
axios.defaults.headers = {
  'appId': '',
  'token': '',
  'Content-Type': 'application/x-www-form-urlencoded'
}

// axios请求拦截器
axios.interceptors.request.use(
  config => {
    //在请求发出之前进行一些操作
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// // axios响应拦截器
// axios.interceptors.response.use(
//   res => {
//     // 在响应后做一些操作
//     return res.data;
// ​  },
//   err => {
//     return Promise.reject(err || '服务异常')
//   }
// )

// post 请求格式
const getData1 = (data) => axios({method: 'post', url: '/user/12345', data: data})
// get 请求格式
const getData2 = (data) => axios({method: 'get', url: '/user/23333', params: data })

export {
  getData1,
  getData2
}