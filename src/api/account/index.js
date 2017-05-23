import axios from '@/api'

function userList () {
  return axios.request('get', '/api/auth/token/')
}

export default {
  list: userList
}
