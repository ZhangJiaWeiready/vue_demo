<template>
    <div>
      <ul>
        <li>id:{{$route.params.id}}</li>
        <li>title:{{detail.title}}</li>
        <li>content:{{detail.content}}</li>
      </ul>
    </div>
</template>

<script>
  const message = [
    {
      id: 1,
      title: "message1",
      content: "my name is content1"
    },
    {
      id: 3,
      title: "message2",
      content: "my name is content2...."
    },
    {
      id: 5,
      title: "message5",
      content: "my name is content5...."
    }
  ]
    export default {
      data () {
        return {
          detail: {

          }
        }
      },
      mounted () {
        const id = this.$route.params.id
        //因为param.id是一个字符串需要转换成number
        this.detail = message.find( item => item.id === id*1 )
      },

      watch: {
        $route(){
          console.log(this)
          const id = this.$route.params.id
          this.detail = message.find( item => item.id === id*1 )
        }
      }
    }
</script>

<style scoped>

</style>
