<template>
  <div>
    <h2>Home组件</h2>
    <div>
      <!-- nav nav-tabs 水平排列-->
      <ul class="nav nav-tabs">
        <li><router-link to='/home/news'>news</router-link></li>
        <li><router-link to='/home/message'>Messages</router-link></li>
      </ul>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {}
</script>

<style>

</style>
