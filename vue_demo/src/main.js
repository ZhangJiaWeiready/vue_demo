/*
入口JS
 */
import Vue from 'vue'
import {Button,Cell} from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'

// 声明使用插件(安装插件)
// 注册成全局的标签
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
// 创建vm
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})
