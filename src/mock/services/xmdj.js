import Mock from 'mockjs2'
import { builder } from '../util'

const getXmdjList = (options) => {
  const result = []
  const key = 1
  console.log('>>>xmdj<<<' + options)
  for (let i = 1; i < 10; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '这是一段描述',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false
    })
  }

  return builder({
    data: result
  })
}

Mock.mock(/\/xmdj\/list/, 'get', getXmdjList)
