(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f90f7cd"],{"24c8":function(e,t,n){"use strict";var i=n("c8bd"),a=n.n(i);a.a},c8bd:function(e,t,n){},fc32:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.$refs.xmjdAppend.add()}}},[e._v("新建")]),n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.handleAppend()}}},[e._v("新增")])],1),n("s-table",{ref:"table",attrs:{size:"small",bordered:!0,rowKey:function(e){return e.id},columns:e.columns,data:e.loadData,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},scroll:{x:1670}},scopedSlots:e._u([{key:"xiangMuJC",fn:function(t){return n("span",{},[n("ellipsis",{attrs:{length:18,tooltip:""}},[e._v(e._s(t))])],1)}},{key:"suoShuBM.buMenMC",fn:function(t){return n("span",{},[n("ellipsis",{attrs:{length:16,tooltip:""}},[e._v(e._s(t))])],1)}},{key:"shiFouXYTB",fn:function(t){return n("span",{},[n("a-tag",{attrs:{color:t?"geekblue":"volcano"}},[e._v(" "+e._s(t?"需要":"不需要")+" ")])],1)}},{key:"shiFouHDXM",fn:function(e){return n("span",{},[n("a-badge",{attrs:{status:e?"success":"error",text:e?"华电项目":"非华电项目"}})],1)}},{key:"action",fn:function(t,i){return n("span",{},[[n("a",{on:{click:function(t){return e.handleEdit(i)}}},[e._v("编辑")]),n("a-divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(t){return e.handleDelete(i)}}},[e._v("删除")])]],2)}}])}),n("xmjd-Append",{ref:"xmjdAppend",on:{ok:e.handleOk}})],1)],1)},a=[],o=n("2af9"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:"新建规则",width:640,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleSubmit,cancel:e.handleCancel}},[n("a-spin",{attrs:{spinning:e.confirmLoading}},[n("a-form",{attrs:{form:e.form}},[n("a-form-item",{attrs:{label:"描述",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["desc",{rules:[{required:!0,min:5,message:"请输入至少五个字符的规则描述！"}]}],expression:"['desc', {rules: [{required: true, min: 5, message: '请输入至少五个字符的规则描述！'}]}]"}]})],1)],1)],1)],1)},r=[],d={data:function(){return{labelCol:{xs:{span:24},sm:{span:7}},wrapperCol:{xs:{span:24},sm:{span:13}},visible:!1,confirmLoading:!1,form:this.$form.createForm(this)}},methods:{add:function(){this.visible=!0},handleSubmit:function(){var e=this,t=this.form.validateFields;this.confirmLoading=!0,t((function(t,n){t?e.confirmLoading=!1:setTimeout((function(){e.visible=!1,e.confirmLoading=!1,e.$emit("ok",n)}),1500)}))},handleCancel:function(){this.visible=!1}}},l=d,c=n("2877"),u=Object(c["a"])(l,s,r,!1,null,null,null),h=u.exports,f=n("b775"),p={xmdjList:"/xmdj/list"};function m(e){return Object(f["b"])({url:p.xmdjList,method:"get",params:e})}var g=[{title:"序号",width:50,dataIndex:"index",fixed:"left"},{title:"评审编号",width:120,dataIndex:"pingShenBH",fixed:"left",sorter:function(e,t){return e.pingShenBH.length-t.pingShenBH.length},sortDirections:["descend","ascend"]},{title:"项目简称",dataIndex:"xiangMuJC",width:150,scopedSlots:{customRender:"xiangMuJC"}},{title:"所属部门",dataIndex:"suoShuBM.buMenMC",width:150,scopedSlots:{customRender:"suoShuBM.buMenMC"}},{title:"项目内容",dataIndex:"xiangMuNR.xiangMuNRMC",width:150},{title:"甲方单位名称",dataIndex:"jiaFangDWMC",width:150},{title:"投标",dataIndex:"shiFouXYTB",width:80,scopedSlots:{customRender:"shiFouXYTB"}},{title:"项目性质",dataIndex:"XiangMuXZ.XiangMuXZMC",width:150},{title:"是否华电",dataIndex:"shiFouHDXM",width:150,scopedSlots:{customRender:"shiFouHDXM"}},{title:"录入人",dataIndex:"luRuR",width:150},{title:"录入日期",dataIndex:"luRuRQ",width:200},{title:"操作",key:"operation",fixed:"right",width:100,scopedSlots:{customRender:"action"}}],b={components:{Ellipsis:o["e"],XmjdAppend:h,STable:o["h"]},data:function(){var e=this;return{columns:g,queryParam:{},loadData:function(t){return m(Object.assign(t,e.queryParam)).then((function(e){return e.result}))},selectedRowKeys:[],selectedRows:[]}},methods:{onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},handleOk:function(){this.$refs.table.refresh()},handleAppend:function(){this.$router.push({path:"/xmdjAppend",params:{a:"aa"}})},handleEdit:function(e){this.$message.warning("编辑按钮待开发中...")},handleDelete:function(e){this.$confirm({title:"确定要删除项目吗?",content:e.xiangMuJC,okText:"是",okType:"danger",cancelText:"否",onOk:function(){},onCancel:function(){}})}}},x=b,w=(n("24c8"),Object(c["a"])(x,i,a,!1,null,"592b5244",null));t["default"]=w.exports}}]);