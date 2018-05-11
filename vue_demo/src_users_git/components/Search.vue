<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model='searchMsg'/>
      <button @click='search'>Search</button>
    </div>
  </section>
</template>

<script>
  import PubSub from 'pubsub-js'
    export default {
      data () {
        return {
          searchMsg: ''
        }
      },
      methods: {
        search (){
          /*  发布信息 */
          const msg = this.searchMsg.trim()
          console.log(msg)
          if (msg){
            //分发消息
            PubSub.publish('searchM',msg)
          }

        }
      }
    }
</script>

<style scoped>

</style>
