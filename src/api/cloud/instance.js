import axios from '@/api'

function list () {
  return axios.request('get', '/api/account/users/')
}

export default {
  list: list
}
