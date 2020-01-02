<template>
  <div class="content">
    <a-form
      @submit="handleSubmit"
      :form="form"
      class="form"
    >
      <a-card class="card" title="客户信息" :bordered="false">
        <a-row :span="24">
          <a-col :span="24">
            <a-form-item label="甲方单位" :label-col="{span: 3}" :wrapper-col="{span: 21}">
              <a-input
                placeholder="甲方单位名称"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '甲方单位' + '名称', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :span="24">
          <a-col :span="12">
            <a-form-item label="投资主体" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="投资主体名称"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '投资主体' + '名称', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="建设单位" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="建设单位名称"
                v-decorator="['jianSheDW',{rules: [{ required: true, message: '请输入' + '建设单位' + '名称', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :span="24">
          <a-col :span="8">
            <a-form-item label="联系人" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="客户联系人名称"
                v-decorator="['jianSheDW',{rules: [{ required: true, message: '请输入' + '客户联系人' + '名称', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="联系电话" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="客户联系电话"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '客户联系电话', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="邮箱" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="客户邮箱"
                v-decorator="['jianSheDW',{rules: [{ required: true, message: '请输入' + '客户邮箱', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
      <a-card class="card" title="我方信息" :bordered="false">
        <a-row :span="24">
          <a-col :span="12">
            <a-form-item label="所属分公司" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-select
                placeholder="请选择所属分公司"
                v-decorator="[
                  'type',
                  {rules: [{ required: true, message: '请选择所属分公司'}]}
                ]" >
                <a-select-option value="1">工程管理部</a-select-option>
                <a-select-option value="2">市场营销部</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="签约主体" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-select
                placeholder="我方签约主体"
                v-decorator="[
                  'type',
                  {rules: [{ required: true, message: '请选择我方签约主体'}]}
                ]" >
                <a-select-option value="1">中国华电科工集团有限公司</a-select-option>
                <a-select-option value="2">华电子公司</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :span="24">
          <a-col :span="8">
            <a-form-item label="联络人" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="我方联络人"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '我方联络人', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="联系电话" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="我方联络人电话"
                v-decorator="['jianSheDW',{rules: [{ required: true, message: '请输入' + '我方联络人电话', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="8">
            <a-form-item label="邮箱" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="我方联络人邮箱"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '我方联络人邮箱', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
      <a-card class="card" title="项目内容" :bordered="false">
        <a-row :span="24">
          <a-col :span="24">
            <a-form-item label="项目名称" :label-col="{span: 3}" :wrapper-col="{span: 21}">
              <a-input
                placeholder="地点+项目所属集团简称+项目简称+合同内容简称"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '项目名称' + '名称', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :span="24">
          <a-col :span="12">
            <a-form-item label="项目简称" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="地名+产品名+产品类型 （不可超过12个字）"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '项目简称', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="所属行业" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-select
                placeholder="所属行业"
                v-decorator="[
                  'type',
                  {rules: [{ required: true, message: '请选择所属行业'}]}
                ]" >
                <a-select-option value="1">电力行业</a-select-option>
                <a-select-option value="2">非电行业</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :span="6">
            <a-form-item label="行业细分" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-select
                placeholder="所属行业"
                v-decorator="[
                  'type',
                  {rules: [{ required: true, message: '请选择所属行业'}]}
                ]" >
                <a-select-option value="1">水电</a-select-option>
                <a-select-option value="2">核电</a-select-option>
                <a-select-option value="3">火电</a-select-option>
                <a-select-option value="4">光伏</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :span="24">
          <a-col :span="3">
            <!-- <span>项目位置</span> -->
          </a-col>
          <a-col :span="21">
            <cascader
              label="行业细分"
              :options="options"
              @change="onChange"
              :defaultValue="['中国', '北京', '北京市']"
            />
          </a-col>
        </a-row>
        <a-row :span="24">
          <a-col :span="24">
            <a-form-item label="具体地点" :label-col="{span: 3}" :wrapper-col="{span: 21}">
              <a-input
                placeholder="具体地点"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '具体地点', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :span="24">
          <a-col :span="3"></a-col>
          <a-col :span="10">
            <a-form-item label="项目性质" >
              <a-radio-group defaultValue="a" buttonStyle="solid">
                <a-radio-button value="a">新建</a-radio-button>
                <a-radio-button value="b">扩建</a-radio-button>
                <a-radio-button value="c">技改</a-radio-button>
                <a-radio-button value="d">其他</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
          <a-col :span="10">
            <a-form-item label="项目取得方式" >
              <a-radio-group defaultValue="a" buttonStyle="solid">
                <a-radio-button value="a">投标</a-radio-button>
                <a-radio-button value="b">集团直接授予</a-radio-button>
                <a-radio-button value="c">投资</a-radio-button>
                <a-radio-button value="d">集团外直接授予</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :span="24" :style="{ marginTop: '16px' }">
          <a-col :span="3"></a-col>
          <a-col :span="21">
            <a-radio-group defaultValue="a" buttonStyle="solid">
              <a-radio-button value="a">供货</a-radio-button>
              <a-radio-button value="b">供货+安装</a-radio-button>
              <a-radio-button value="c">EPC</a-radio-button>
              <a-radio-button value="d">BOT</a-radio-button>
              <a-radio-button value="e">设计</a-radio-button>
              <a-radio-button value="f">咨询服务</a-radio-button>
              <a-radio-button value="g">设计+施工(EC)</a-radio-button>
              <a-radio-button value="h">运输</a-radio-button>
              <a-radio-button value="i">建安</a-radio-button>
              <a-radio-button value="j">其他</a-radio-button>
            </a-radio-group>
          </a-col>
        </a-row>

        <a-row :span="24" :style="{ marginTop: '16px' }">
          <a-col :span="3"></a-col>
          <a-col :span="9">
            <a-radio-group v-model="value" :defaultValue="1" buttonStyle="solid">
              <a-radio-button :value="1">投标中标</a-radio-button>
              <a-radio-button :value="2">直接议标</a-radio-button>
              <a-radio-button :value="3">集团直接授予</a-radio-button>
              <a-radio-button :value="4">其他</a-radio-button>
            </a-radio-group>
          </a-col>
          <a-col :span="12">
            <a-form-item v-if="value === 4" label="其他取得方式" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="其他取得方式"
                v-decorator="['jiaFangDW',{rules: [{ required: true, message: '请输入' + '我方联络人', whitespace: true}]}]" />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :span="24" :style="{ marginTop: '16px' }">
          <a-col :span="3"></a-col>
          <a-col :span="21">
            <a-radio-group defaultValue="a" buttonStyle="solid">
              <a-radio-button value="a">材料项目</a-radio-button>
              <a-radio-button value="b">技改项目</a-radio-button>
              <a-radio-button value="c" disabled>基建项目</a-radio-button>
              <a-radio-button value="d">检修项目</a-radio-button>
              <a-radio-button value="e" disabled>科技项目</a-radio-button>
              <a-radio-button value="f">信息项目</a-radio-button>
            </a-radio-group>
          </a-col>
        </a-row>

        <a-row :span="24" :style="{ marginTop: '16px' }">
          <a-col :span="12">
            <a-form-item label="预估合同" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input-number
                :style="{width:'100%'}"
                :defaultValue="100"
                :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                @change="onChange"
              />
            </a-form-item>
          </a-col>
          <a-col :span="3">
            <a-form-item label="汇率" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input-number
                :defaultValue="1"
                :min="0"
                :max="10"
                :step="0.1"
                :precision="2"
                @change="onChange" />
            </a-form-item>
          </a-col>
          <a-col :span="5">
            <a-form-item label="统计额" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input-number
                disabled
                :style="{width:'100%'}"
                :defaultValue="100"
                :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                :parser="value => value.replace(/\$\s?|(,*)/g, '')"
                @change="onChange"
              />
            </a-form-item>
          </a-col>
          <a-col :span="4">
            <a-form-item label="预估毛利率" :label-col="{span:10}" :wrapper-col="{span:14}">
              <a-input-number
                :defaultValue="100"
                :min="0"
                :max="100"
                :formatter="value => `${value}%`"
                :parser="value => value.replace('%', '')"
                @change="onChange"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :span="24">
          <a-col :span="12">
            <a-form-item label="预计合同签署" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-date-picker @change="onChange" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="项目销售费用预算" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-switch checkedChildren="有" unCheckedChildren="无" defaultChecked />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :span="24">
          <a-col :span="24">
            <a-form-item label="主要合同内容" :label-col="{span: 3}" :wrapper-col="{span: 21}">
              <a-textarea
                placeholder="主要合同内容"
                :autosize="{ minRows: 2, maxRows: 6 }"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row :span="24" :style="{ marginTop: '16px' }">
          <a-col :span="24">
            <a-form-item label="备注" :label-col="{span: 3}" :wrapper-col="{span: 21}">
              <a-textarea
                placeholder="备注"
                :autosize="{ minRows: 2, maxRows: 6 }"
              />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>

      <!-- table -->
      <a-card>
        <a-table
          :columns="columns"
          :dataSource="columnData"
          :pagination="false"
          :loading="memberLoading"
        >
          <template v-for="(col, i) in ['name', 'workId', 'department']" :slot="col" slot-scope="text, record">
            <a-input
              :key="col"
              v-if="record.editable"
              style="margin: -5px 0"
              :value="text"
              :placeholder="columns[i].title"
              @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>{{ text }}</template>
          </template>
          <template slot="operation" slot-scope="text, record">
            <template v-if="record.editable">
              <span v-if="record.isNew">
                <a @click="saveRow(record)">添加</a>
                <a-divider type="vertical" />
                <a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
                  <a>删除</a>
                </a-popconfirm>
              </span>
              <span v-else>
                <a @click="saveRow(record)">保存</a>
                <a-divider type="vertical" />
                <a @click="cancel(record.key)">取消</a>
              </span>
            </template>
            <span v-else>
              <a @click="toggle(record.key)">编辑</a>
              <a-divider type="vertical" />
              <a-popconfirm title="是否要删除此行？" @confirm="remove(record.key)">
                <a>删除</a>
              </a-popconfirm>
            </span>
          </template>
        </a-table>
        <a-button style="width: 100%; margin-top: 16px; margin-bottom: 8px" type="dashed" icon="plus" @click="newMember">新增成员</a-button>
      </a-card>

      <a-card class="card" title="上传材料" :bordered="false">
        <a-row :span="24">
          <a-col :span="24">
            <a-upload-dragger
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
            >
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
              </p>
              <p class="ant-upload-text">请上传经济分析附件</p>
              <p class="ant-upload-hint">点击或将文件拖拽到框中</p>
            </a-upload-dragger>
          </a-col>
        </a-row>

        <a-row :span="24" :style="{ marginTop: '16px' }">
          <a-col :span="24">
            <a-upload-dragger
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
            >
              <p class="ant-upload-drag-icon">
                <a-icon type="inbox" />
              </p>
              <p class="ant-upload-text">其他背景资料</p>
              <p class="ant-upload-hint">点击或将文件拖拽到框中</p>
            </a-upload-dragger>
          </a-col>
        </a-row>
      </a-card>

    </a-form>
  </div>
</template>

<script>
import { Cascader } from 'ant-design-vue'

// table
const columns = [
  {
    title: '成员姓名',
    dataIndex: 'name',
    key: 'name',
    width: '20%',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: '工号',
    dataIndex: 'workId',
    key: 'workId',
    width: '20%',
    scopedSlots: { customRender: 'workId' }
  },
  {
    title: '所属部门',
    dataIndex: 'department',
    key: 'department',
    width: '40%',
    scopedSlots: { customRender: 'department' }
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'operation' }
  }
]

const columnData = [
  {
    key: '1',
    name: '小明',
    workId: '001',
    editable: false,
    department: '行政部'
  },
  {
    key: '2',
    name: '李莉',
    workId: '002',
    editable: false,
    department: 'IT部'
  },
  {
    key: '3',
    name: '王小帅',
    workId: '003',
    editable: false,
    department: '财务部'
  }
]

export default {
  name: 'XmdjAppend',
  components: {
    Cascader
  },
  data () {
    return {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 18
      },
      columns: columns,
      columnData: columnData,
      memberLoading: false,
      value: 1,
      options: [
        {
          value: '中国',
          label: '中国',
          children: [
            {
              value: '北京',
              label: '北京',
              children: [
                {
                  value: '北京市',
                  label: '北京市'
                }
              ]
            }, {
              value: '河北',
              label: '河北',
              children: [
                {
                  value: '石家庄',
                  label: '石家庄'
                }
              ]
            }
          ]
        },
        {
          value: '越南',
          label: '越南',
          children: [
            {
              value: '河内',
              label: '河内',
              children: [
                {
                  value: '河内',
                  label: '河内'
                }
              ]
            }
          ]
        }
      ],
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
    },
    validate (rule, value, callback) {
    },
    onChange (value) {
      console.log(value)
    },
    newMember () {
      const length = this.columnData.length
      this.columnData.push({
        key: length === 0 ? '1' : (parseInt(this.columnData[length - 1].key) + 1).toString(),
        name: '',
        workId: '',
        department: '',
        editable: true,
        isNew: true
      })
    },
    remove (key) {
      const newData = this.columnData.filter(item => item.key !== key)
      this.columnData = newData
    },
    saveRow (record) {
      this.memberLoading = true
      const { key, name, workId, department } = record
      if (!name || !workId || !department) {
        this.memberLoading = false
        this.$message.error('请填写完整成员信息。')
        return
      }
      // 模拟网络请求、卡顿 800ms
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ loop: false })
        }, 800)
      }).then(() => {
        const target = this.columnData.find(item => item.key === key)
        target.editable = false
        target.isNew = false
        this.memberLoading = false
      })
    },
    cancel (key) {
      const target = this.columnData.find(item => item.key === key)
      Object.keys(target).forEach(key => { target[key] = target._originalData[key] })
      target._originalData = undefined
    },
    handleChange (value, key, column) {
      const newData = [...this.columnData]
      const target = newData.find(item => key === item.key)
      if (target) {
        target[column] = value
        this.columnData = newData
      }
    },
    toggle (key) {
      const target = this.columnData.find(item => item.key === key)
      target._originalData = { ...target }
      target.editable = !target.editable
    }
  }
}
</script>

<style lang="less">
.card{
    margin-bottom : 24px
}
</style>
