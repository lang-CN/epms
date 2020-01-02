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
            <a-radio-group defaultValue="a" buttonStyle="solid">
              <a-radio-button value="a">新建</a-radio-button>
              <a-radio-button value="b">扩建</a-radio-button>
              <a-radio-button value="c">技改</a-radio-button>
              <a-radio-button value="d">其他</a-radio-button>
            </a-radio-group>
          </a-col>
          <a-col :span="10">
            <a-radio-group defaultValue="a" buttonStyle="solid">
              <a-radio-button value="a">投标</a-radio-button>
              <a-radio-button value="b">集团直接授予</a-radio-button>
              <a-radio-button value="c">投资</a-radio-button>
              <a-radio-button value="d">集团外直接授予</a-radio-button>
            </a-radio-group>
          </a-col>
        </a-row>

        <a-row :span="24">
          <a-col :span="24">
            <div style="height:20px">&nbsp;</div>
          </a-col>
        </a-row>

        <a-row :span="24">
          <a-col :span="3"></a-col>
          <a-col :span="21">
            <a-radio-group defaultValue="a" buttonStyle="solid">
              <a-radio-button value="a">供货</a-radio-button>
              <a-radio-button value="b">供货+安装</a-radio-button>
              <a-radio-button value="c">EPC</a-radio-button>
              <a-radio-button value="c">BOT</a-radio-button>
              <a-radio-button value="e">设计</a-radio-button>
              <a-radio-button value="f">咨询服务</a-radio-button>
              <a-radio-button value="g">设计+施工(EC)</a-radio-button>
              <a-radio-button value="h">运输</a-radio-button>
              <a-radio-button value="i">建安</a-radio-button>
              <a-radio-button value="j">其他</a-radio-button>
            </a-radio-group>
          </a-col>
        </a-row>

      </a-card>
    </a-form>
  </div>
</template>

<script>
import { Cascader } from 'ant-design-vue'

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
    }
  }
}
</script>

<style lang="less">
.card{
    margin-bottom : 24px
}
</style>
