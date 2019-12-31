<template>
  <a-table
    :columns="columns"
    :pagination="pagination"
    :loading="loading"
    :dataSource="data"
    :scroll="{ x: 1800, y: 300 }">
    <a slot="action" href="javascript:;">action</a>
  </a-table>
</template>
<script>
import { getXmdjList } from '@/api/xmdj'

// 表头
const columns = [
  { title: '序号', width: 100, dataIndex: 'index', fixed: 'left' },
  { title: '评审编号', width: 100, dataIndex: 'pingShenBH', fixed: 'left' },
  { title: '项目简称', dataIndex: 'xiangMuJC', width: 150 },
  { title: '所属部门', dataIndex: 'suoShuBM', width: 150 },
  { title: '项目内容', dataIndex: 'xiangMuNR', width: 150 },
  { title: '项目名称', dataIndex: 'xiangMuMC', width: 150 },
  { title: '前期立项号', dataIndex: 'qianQiLXH', width: 150 },
  { title: '甲方单位名称', dataIndex: 'jiaFangDWMC', width: 150 },
  { title: '是否需要投标', dataIndex: 'shiFouXYTB', width: 150 },
  { title: '项目性质', dataIndex: 'XiangMuXZ', width: 150 },
  { title: '是否华电项目', dataIndex: 'shiFouHDXM', width: 150 },
  { title: '录入人', dataIndex: 'luRuR', width: 150 },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  mounted () {
    const result = this.loadData()
    result.then(r => {
      console.log('>>>' + this._uid)
      console.log('>>>' + r)
      this.data = r.data
    })
  },
  data () {
    return {
      data: [],
      pagination: {},
      // 查询参数
      queryParam: {},
      loading: false,
      columns
    }
  },
  methods: {
    // 加载数据方法 必须为 Promise 对象
    loadData: (pagination, filters, sorter) => {
      console.log('loadData.parameter', pagination)
      // eslint-disable-next-line no-unused-vars
      return getXmdjList(pagination).then(res => {
        return res.result
      })
    }
  }
}
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
