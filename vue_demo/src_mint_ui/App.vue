<template>
  <div>
    <mt-button type="default" @click='handle'>default</mt-button>
    <mt-button type="primary">primary</mt-button>
  </div>

</template>

<script>
  import {Toast} from 'mint-ui'
    export default {
        methods: {
          handle() {
            Toast ('提示信息')
          }

        }
    }
</script>

<style scoped>

</style>
