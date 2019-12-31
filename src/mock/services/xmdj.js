import Mock from 'mockjs2'
import { builder, getQueryParameters } from '../util'

const totalCount = 122

const getXmdjList = (options) => {
  console.log('>>>manage<<<' + options)
  const parameters = getQueryParameters(options)
  const result = []
  const pageNo = parseInt(parameters.pageNo)
  const pageSize = parseInt(parameters.pageSize)
  const totalPage = Math.ceil(totalCount / pageSize)
  const key = (pageNo - 1) * pageSize
  const next = (pageNo >= totalPage ? (totalCount % pageSize) : pageSize) + 1

  for (let i = 1; i < next; i++) {
    const tmpKey = key + i
    result.push({
      key: tmpKey,
      id: tmpKey,
      no: 'No ' + tmpKey,
      description: '这是一段描述',
      callNo: Mock.mock('@integer(1, 999)'),
      status: Mock.mock('@integer(0, 3)'),
      updatedAt: Mock.mock('@datetime'),
      editable: false,
      // 序号
      index: tmpKey,
      // 评审编号2019LX-0000
      pingShenBH: Mock.mock(/20[1-2][0-9]LX-[0-9]{4}/),
      // 项目内容
      xiangMuNR: Mock.mock({
        'xiangMuNRMC|1': [
          'EPC',
          '供货',
          '供货+安装',
          'BOT',
          ''
        ] }),
      // 项目性质
      XiangMuXZ: Mock.mock({
        'XiangMuXZMC|1': [
          '新建',
          '扩建',
          '技改',
          '其他',
          ''
        ] }),
      // 项目简称
      xiangMuJC: Mock.mock({ 'xiangMuJC|8-20': '*' }).xiangMuJC + '项目',
      // 指示参数 true 出现的概率。概率计算公式为 1 / (1 + 5)。该参数的默认值为 1，即有 50% 的概率返回参数 true
      shiFouXYTB: Mock.mock('@boolean()'),
      shiFouHDXM: Mock.mock('@boolean()'),
      // 所属部门
      suoShuBM: Mock.mock({
        'buMenMC|1': [
          '华电重工股份有限公司',
          '国际业务部',
          '安全生产部',
          '工程管理部',
          '市场营销部',
          '科技管理部（信息管理部）',
          '办公室',
          '党建工作部（工会办、团委）',
          '人力资源部',
          '财务部',
          '审计部',
          '规划发展部',
          '资产管理部',
          '华电重工',
          '环境保护分公司',
          '华电水务科技股份有限公司',
          '总承包分公司',
          '海外工程分公司',
          '华电分布式能源工程分公司',
          '新能源技术开发公司',
          '监察部（纪委办公室、巡察办公室）',
          '设计院（设计管理部）',
          '国际贸易分公司',
          '华电电力科学研究院',
          '北京华电万方管理体系认证中心',
          '创业投资有限公司',
          '中国华电集团科学技术研究总院（中国华电集团科学技术研究总院有限公司）',
          '行政管理服务中心'
        ] }),
      // 录入人
      luRuR: Mock.mock('@cname'),
      // 录入日期
      luRuRQ: Mock.mock('@datetime')
    })
  }

  return builder({
    pageSize: pageSize,
    pageNo: pageNo,
    totalCount: totalCount,
    totalPage: totalPage,
    data: result
  })
}

Mock.mock(/\/xmdj\/list/, 'get', getXmdjList)
