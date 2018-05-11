<template>

    <div>
      <h2 v-show="firstView">请输入关键字搜索</h2>
      <h2 v-show="loading">请求中...</h2>
      <h2 v-show='errmsg'>{{errmsg}}</h2>
      <div class="row" v-show='users.length>0'>
          <div  class="card" v-for='(item,index) in users' :key='index'>
            <a :href="item.url" target="_blank">
              <img :src="item.avatorUrl" style='width: 100px'/>
            </a>
            <p class="card-text">{{item.username}}</p>
          </div>
        </div>
    </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import axios from 'axios'
    export default {
      data (){
        return {
          firstView: true,
          loading: false,
          users: [],
          errmsg: '',

        }
      },
      mounted () {
        PubSub.subscribe('searchM', (message,searchName) => {
          const url = `https://api.github.com/search/users?q=${searchName}`
          //更新信息
          // 请求中


          this.firstView = false
          this.loading = true
          this.users = []
          this.errmsg = ''
          axios.get(url)
            .then(response => {
                //请求成功
                this.loading = false
                //只需要改 外面不需要用
                console.log(this)
                this.users = response.data.items.map(item => ({
                  url: item.html_url,
                  avatorUrl: item.avatar_url,
                  username: item.login
                }))
              console.log(this.users.length)
              }
            )
            .catch(error => {
                //请求失败
              console.log(error)
                this.loading = false
                this.errmsg = '查找失败'
              }
            )
        })
      }}
</script>

<style scoped>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
