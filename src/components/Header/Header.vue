<template>
	<div class="headerWrap">
    <div class="searchWrap">
       <a class="logo"></a>
      <div  class="search">
        <span>
          <i class="iconfont icon-search"></i>
        </span>
        <span>搜索商品，共25163款件好物</span>
      </div>
      <div class="btn">登陆</div>
    </div>
    <div class="navWrap">
      <div class="listWrap">
        <ul ref="listUl" class="list">
          <li class="on"><span>推荐</span></li>
          <li v-for="(item,index) in kingKongList" :key="index"><span>{{item.text}}</span></li>
          <!--<li><span>服饰鞋包</span></li>-->
          <!--<li><span>美食酒水</span></li>-->
          <!--<li><span>个人清洁</span></li>-->
          <!--<li><span>母婴亲子</span></li>-->
        </ul>
      </div>
      <div class="detail">
        <span>
          <i class="iconfont icon-down" ></i>
          <!--<i class="iconfont icon-top" display="none"></i>-->
        </span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
 import {mapState} from 'vuex'
  export default {
    name: 'Header',
    data() {
      return {
      
      }
    },
    computed:{
      ...mapState(['kingKongList']) // tab导航栏商品分类别表
      
      
    },
    mounted () {
      const ul=this.$refs.listUl
      const width=144*5
      ul.style.width=width+'px'
      new BScroll('.listWrap',{
        click:true,
        scrollX:true
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  .headerWrap
    position: relative
    background: #fff
    top: 0
    left: 0
    z-index 30
    .searchWrap
      box-sizing border-box
      width 100%
      height 88px
      padding 16px 30px
      display: flex
      justify-content space-between
      align-items center
      flex-direction row
      .logo
        width:138px
        height:40px
        font-size 30px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png)
        background-repeat:no-repeat
        background-size 100%
      .search
        width: 442px
        height: 56px
        background: #ededed
        text-align center
        line-height:56px
        border-radius 8px
        font-size 26px
        vertical-align middle
        span
          color #666
      .btn
        width: 74px
        height: 40px
        font-size 24px
        border 1px solid #b4282d
        text-align center
        line-height 40px
        color #b4282d
        border-radius 8px
        vertical-align middle
    .navWrap
      position relative
      width 100%
      height 60px
      .listWrap
        width 90%
        height 60px
        overflow hidden
        .list
          height 100%
          padding 0 30px
          overflow hidden
          white-space nowrap
          /*justify-content center*/
          /*align-items flex-start*/
          /*flex-wrap nowrap*/
          li
            display inline-block
            height 100%
            margin-right 10px
            padding 0 16px
            font-size 28px
            text-align center
            line-height 60px
            box-sizing border-box
            font-family  PingFangSC-Light,helvetica,'Heiti SC'
            &.on
              border-bottom 4px solid #b4282d
              color #b4282d
      .detail
        position absolute
        top 0
        right 0
        width: 145px
        height: 60px
        z-index 3
        background: #fff
        span
          float right
          width: 100px
          height: 60px
          text-align center
          line-height 60px
</style>
