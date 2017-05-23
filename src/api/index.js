import axios from 'axios'
import qs from 'qs'
import router from '@/router'
import constant from '@/constant'

// axios.defaults.xsrfHeaderName = "csrftoken";

// axios 配置
axios.defaults.timeout = 10000
axios.defaults.baseURL = 'http://127.0.0.1:9900'

// http request 拦截器
axios.interceptors.request.use(
    config => {
      // TODO: vuex
      // if (store.state.token) {
      if (constant.auth.token) {
        config.headers.Authorization = 'Token ' + constant.auth.token
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })

// http response 拦截器
axios.interceptors.response.use(
    response => {
      return response
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 401 清除token信息并跳转到登录页面
            // store.commit(types.LOGOUT);
            router.replace({
              name: 'login',
              query: {redirect: router.currentRoute.fullPath}
            })
        }
      }
      // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
      return Promise.reject(error.response.data)
    })

export default {
  request (method, uri, data = null) {
    return axios({
      method: method,
      url: uri,
      data: qs.stringify(data),
      cors: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}
