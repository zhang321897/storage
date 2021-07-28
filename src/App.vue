<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  // 给路径起了别名，这样即使你复制到别的页面也不需要换路径，详情配置在build文件夹下的webpack.base.config.js文件
  import MainTabBar from 'components/tabbar/MainTabBar.vue'
  export default {
    name: 'App',
    components:{
      MainTabBar
    }
  }
</script>

<style>
@import "./assets/css/base.css";

</style>
