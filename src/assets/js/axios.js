// axios为ajax工具，用法和jQ的ajax类似，不过支持promise用法
import axios from 'axios'

const baseURL = 'http://www.dliberty.com/curry-web'

const BackToLogin = (response) => {
  location.href = '/#/login';
}

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 30000

axios.interceptors.request.use(config => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  if (config.method === 'get' || config.method === 'delete') {
    config.params = config.params || {}
  } else {
    config.data = config.data || {}
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  if (typeof response.data === 'object') {
    return response.data
  } else if (typeof response.data === 'string') {
    if (response.data.indexOf('重新登录') > 0) {
      BackToLogin(response);
    } else {
      return response.data
    }
  } else {
    return response.data
  }
}, error => {
  if (error.response && error.response.status == 401) {
    BackToLogin(error.response);
  }
  return Promise.reject(error)
})

// ajax get方法，使用通用的返回code过滤
export const get = (url, data) => {
  return axios.get(url, {params: data})
}

// ajax post方法，使用通用的返回code过滤
export const post = (url, data) => {
  return axios.post(url, data)
}

// ajax put方法，使用通用的返回code过滤
export const put = (url, data) => {
  return axios.put(url, data)
}

// ajax delete方法，使用通用的返回code过滤
export const _delete = (url, data) => {
  return axios.delete(url, {params: data})
}

export default {
  get: get,
  post: post,
  put: put,
  delete: _delete,
}

