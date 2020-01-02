<template>
  <div class="content">
    <a-form
      @submit="handleSubmit"
      :form="form"
      class="form"
    >
      <a-card class="card" title="客户信息" :bordered="false">
        <a-row :span="12">
          <a-col :span="12">
            <a-form-item label="规则编号" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input placeholder=""/>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="仓库名" :label-col="labelCol" :wrapper-col="wrapperCol">
              <a-input
                placeholder="请输入仓库名称"
                v-decorator="[
                  'name',
                  {rules: [{ required: true, message: '请输入仓库名称', whitespace: true}]}
                ]" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-card>
      <a-card class="card" title="我方信息" :bordered="false">
      </a-card>
      <a-card class="card" title="项目内容" :bordered="false">
      </a-card>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'XmdjAppend',
  data () {
    return {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 20
      },
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit (e) {
    },
    validate (rule, value, callback) {
    }
  }
}
</script>

<style lang="less">
.card{
    margin-bottom : 24px
}
</style>
