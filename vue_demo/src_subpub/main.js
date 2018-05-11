/* 入口js文件
* */
import Vue from 'vue'
import App from './App.vue'
import './base.css'


// 语法检查会报错 vue没有使用 所以加入这行代码 就不会检查这个地方的这个语法了
/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: {App}, //映射组件标签
  template:' <App/>' //  指定需要渲染到页面的模板模板里面的内容会插入页面中
})

