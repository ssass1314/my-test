<template>
    <ul class="tabContent">
      <li  >
        <router-link to="/msite">
          <span :class="{on:$route.path==='/msite'}">
           <i class="iconfont icon-shouye icon"></i>
          </span>
          <span :class="{on:$route.path==='/msite'}" class="bottom">首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/classify">
          <span :class="{on:$route.path==='/classify'}">
           <i class="icon iconfont icon-iconyihuifu-"></i>
          </span>
          <span :class="{on:$route.path==='/classify'}" class="bottom">分类</span>
        </router-link>
      </li>
      <li>
        <router-link to="/general">
          <span :class="{on:$route.path==='/general'}">
           <i class="icon iconfont icon-tupian"></i>
          </span>
          <span :class="{on:$route.path==='/general'}" class="bottom">识物</span>
        </router-link>
      </li>
      <li>
        <router-link to="/shopCart">
          <span :class="{on:$route.path==='/shopCart'}">
           <i class="icon iconfont  icon-tubiaozhizuomoban"></i>
          </span>
          <span :class="{on:$route.path==='/shopCart'}" class="bottom">购物车</span>
        </router-link>
      </li>
      <li>
        <router-link to="/presonal">
          <span :class="{on:$route.path==='/presonal'}">
           <i class="icon iconfont icon-gerenzhongxin"></i>
          </span>
          <span :class="{on:$route.path==='/presonal'}" class="bottom">个人</span>
        </router-link>
      </li>
    </ul>
  
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Footer',
    data() {
      return {
      
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  /*.tabContent*/
    /**/
    /*position: fixed*/
    /*bottom 0*/
    /*left 0*/
    /*width 100%*/
    /*height 98px*/
  .tabContent
    position fixed
    left: 0
    bottom: 0
    width 100%
    height: 98px
    margin: auto
    display flex
    justify-content space-around
    align-items center
    li
      display flex
      justify-content space-between
      height: 71px
      font-size 24px
      text-align center
      .icon
        display block
        font-size 40px
        width:40px
        height:40px
        background-size 100%
        margin 0 auto
      span
        display block
        font-size 24px
        &.on
          color red
        &.bottom
          margin-top 10px
</style>
