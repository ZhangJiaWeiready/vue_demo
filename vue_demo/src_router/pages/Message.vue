<template>
    <div>
      <ul>
        <li v-for='msg in messages' :key='msg.id'>
          <router-link :to="`/home/message/detail/${msg.id}`">{{msg.title}}</router-link>
          <button @click='push(msg.id)'>push</button>
          <button @click='replace(msg.id)'>replace</button>
        </li>
      </ul>
      <button @click='$router.back()'>back</button>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data (){
          return {
            messages: [

            ]
          }
        },
      mounted (){
          //初始化渲染完成之后
          // 处理异步请求
          setTimeout( () =>
            this.messages= [
              {id: 1, title: 'Message01' },
              {id: 3, title: 'Message03' },
              {id: 5, title: 'Message05' }
            ]
            ,1000)
      },
      methods: {
          push (id) {
            this.$router.push(`/home/message/detail/${id}`)
          },
          replace(id) {
            this.$router.replace(`/home/message/detail/${id}`)
          }
      }
    }
</script>

<style scoped>

</style>
