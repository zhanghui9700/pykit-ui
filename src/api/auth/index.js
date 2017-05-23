import axios from '@/api'

function login (auth) {
  return axios.request('post', '/api/auth/token/', auth)
}

export default {
  login: login
}
