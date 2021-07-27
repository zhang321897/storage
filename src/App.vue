<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <!-- 因为我们还需要活跃的时候一张图片，所以我们还需要一个插槽传图片 -->
        <img src="./assets/img/tabbar/home.png" slot="item-icon">
        <img src="./assets/img/tabbar/home-active.png" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/classify" activeColor="red">
        <img src="./assets/img/tabbar/classify.png" slot="item-icon">
        <img src="./assets/img/tabbar/classify-active.png" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="red">
        <img src="./assets/img/tabbar/shopcar.png" slot="item-icon">
        <img src="./assets/img/tabbar/shopcar-active.png" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/me" activeColor="red">
        <img src="./assets/img/tabbar/me.png" slot="item-icon">
        <img src="./assets/img/tabbar/home-active.png" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar.vue'
  import TabBarItem from "./components/tabbar/TabBarItem.vue"
export default {
  name: 'App',
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
