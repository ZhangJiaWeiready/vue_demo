<template>
  <label>
      <li :style="{background:bgColor}"

          @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">

          <input type="checkbox" v-model="item.complete"/>
          <span>{{item.title}}</span>

        <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
      </li>
  </label>
</template>

<script>
    export default {
      props: {
        item: {
          type: Object
        },
        index:Number,
        deleteTodo:Function
      },
      data (){
       return {
         bgColor: 'white',
         isShow: false
       }
      },
      methods: {
        handleEnter (isEnter){
          if (isEnter){
            this.bgColor = 'silver'
            this.isShow = true
          }else{
            this.bgColor = 'white'
            this.isShow = false
          }
        },
        deleteItem (){
          //删除当前的index的li
          if (window.confirm("确认删除吗?")){
            this.deleteTodo(this.index)
          }

        },
        clickList (){
          this.item.complete = !this.item.complete
        }
      }
    }
</script>

<style>
  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  /*footer*/

</style>
