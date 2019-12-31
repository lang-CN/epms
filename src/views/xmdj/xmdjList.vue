<template>
  <div class="content">
    <a-card :bordered="false">

      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="$refs.xmjdAppend.add()">新建</a-button>
        <a-button type="primary" icon="plus" @click="handleAppend()">新增</a-button>
      </div>
      <s-table
        ref="table"
        size="small"
        :bordered="true"
        :rowKey="(record) => record.id"
        :columns="columns"
        :data="loadData"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :scroll="{ x: 1670 }"
      >
        <span slot="xiangMuJC" slot-scope="text">
          <ellipsis :length="18" tooltip>{{ text }}</ellipsis>
        </span>
        <!-- 所属部门 -->
        <span slot="suoShuBM.buMenMC" slot-scope="text">
          <ellipsis :length="16" tooltip>{{ text }}</ellipsis>
        </span>
        <!-- 是否需要投标 -->
        <span slot="shiFouXYTB" slot-scope="flag">
          <a-tag
            :color="flag ? 'geekblue' : 'volcano'"
          >
            {{ flag ? '需要' : '不需要' }}
          </a-tag>
        </span>
        <!-- 是否华电项目 -->
        <span slot="shiFouHDXM" slot-scope="flag">
          <a-badge :status="flag ? 'success' : 'error'" :text="flag ? '华电项目' : '非华电项目'" />
        </span>
        <!-- 操作 -->
        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleEdit(record)">编辑</a>
            <a-divider type="vertical" />
            <a @click="handleDelete(record)">删除</a>
          </template>
        </span>
      </s-table>
      <xmjd-Append ref="xmjdAppend" @ok="handleOk" />
    </a-card>
  </div>
</template>

<script>
import { STable, Ellipsis } from '@/components'
import XmjdAppend from './xmjdAppend'
import { getXmdjList } from '@/api/xmdj'

// 表头
const columns = [
  { title: '序号', width: 50, dataIndex: 'index', fixed: 'left' },
  { title: '评审编号',
    width: 120,
    dataIndex: 'pingShenBH',
    fixed: 'left',
    sorter: (a, b) => a.pingShenBH.length - b.pingShenBH.length,
    sortDirections: ['descend', 'ascend']
  },
  { title: '项目简称', dataIndex: 'xiangMuJC', width: 150, scopedSlots: { customRender: 'xiangMuJC' } },
  { title: '所属部门', dataIndex: 'suoShuBM.buMenMC', width: 150, scopedSlots: { customRender: 'suoShuBM.buMenMC' } },
  { title: '项目内容', dataIndex: 'xiangMuNR.xiangMuNRMC', width: 150 },
  { title: '甲方单位名称', dataIndex: 'jiaFangDWMC', width: 150 },
  { title: '投标', dataIndex: 'shiFouXYTB', width: 80, scopedSlots: { customRender: 'shiFouXYTB' } },
  { title: '项目性质', dataIndex: 'XiangMuXZ.XiangMuXZMC', width: 150 },
  { title: '是否华电', dataIndex: 'shiFouHDXM', width: 150, scopedSlots: { customRender: 'shiFouHDXM' } },
  { title: '录入人', dataIndex: 'luRuR', width: 150 },
  { title: '录入日期', dataIndex: 'luRuRQ', width: 200 },
  {
    title: '操作',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  components: {
    Ellipsis,
    XmjdAppend,
    STable
  },
  data () {
    return {
      columns,
      // 查询条件参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        return getXmdjList(Object.assign(parameter, this.queryParam))
          .then(res => {
            console.log(res.result)
            return res.result
          })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  methods: {
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    handleOk () {
      this.$refs.table.refresh()
    },
    handleAppend () {
      this.$router.push({ path: '/xmdjAppend', params: { a: 'aa' } })
    },
    handleEdit (record) {
      console.log(record)
      this.$message.warning(
        '编辑按钮待开发中...'
      )
    },
    handleDelete (record) {
      console.log(record)
      this.$confirm({
        title: '确定要删除项目吗?',
        content: record.xiangMuJC,
        okText: '是',
        okType: 'danger',
        cancelText: '否',
        onOk () {
          console.log('OK')
        },
        onCancel () {
          console.log('Cancel')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
/* .ant-table-tbody > tr > td {
    padding: 0px 0px
} */
/* .ant-table-tbody > tr.ant-table-row {
    background-color: white !important;
 } */
div.ant-tag{
    width: 50px !important;
    text-align: justify;
    text-align-last: justify;
}
/* .table-operator{
  padding-right: 5px;
  margin-bottom:18px
} */
.content {
    margin: 24px 24px 0;
    .link {
      margin-top: 16px;
      &:not(:empty) {
        margin-bottom: 16px;
      }
      a {
        margin-right: 32px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
        i {
          font-size: 24px;
          margin-right: 8px;
          vertical-align: middle;
        }
        span {
          height: 24px;
          line-height: 24px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
</style>
