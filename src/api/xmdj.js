import { axios } from '@/utils/request'

const api = {
  xmdjList: '/xmdj/list'
}

export default api

export function getXmdjList (parameter) {
  console.log('>>>' + api.xmdjList + '<<<' + parameter)
  return axios({
    url: api.xmdjList,
    method: 'get',
    params: parameter
  })
}
