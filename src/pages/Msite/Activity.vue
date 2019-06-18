<template>
	<div class="activityWrap">
    <div class="header">
      <a href="javascript:">
        <div class="bestShellWraper">
          <img src="../../../static/imgs/nvsheng/1.jpg" alt="">
          <div class="price">￥888</div>
        </div>
      </a>
    </div>
    <ul class="hotActiveList">
      <li class="itemWraper">
        <a href="javascript:">
          <img src="../../../static/imgs/nvsheng/1.jpg" alt="">
        </a>
      </li>
      <li class="itemWraper">
        <a href="javascript:">
          <img src="../../../static/imgs/nvsheng/1.jpg" alt="">
        </a>
      </li>
      <li class="itemWraper">
        <a href="javascript:">
          <img src="../../../static/imgs/nvsheng/1.jpg" alt="">
        </a>
      </li>
      <li class="itemWraper">
        <a href="javascript:">
          <img src="../../../static/imgs/nvsheng/1.jpg" alt="">
        </a>
      </li>
      <li class="itemWraper">
        <a href="javascript:">
          <img src="../../../static/imgs/nvsheng/1.jpg" alt="">
        </a>
      </li>
      <li class="itemWraper">
        <a href="javascript:">
          <img src="../../../static/imgs/nvsheng/1.jpg" alt="">
        </a>
      </li>
    </ul>
    <div class="facorible">
      <a href="javascript:">
        <div class="facoribleItem"></div>
      </a>
      <a href="javascript:">
        <div class="facoribleItem"></div>
      </a>
      <a href="javascript:">
        <div class="facoribleItem"></div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Activity'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .activityWrap
    width: 750px
    height: 1895px
    background-image: url("https://yanxuan.nosdn.127.net/6b2eb7819e2e7802d8cded1246e30697.jpg?imageView&quality=75")
    .header
      position relative
      width: 750px
      height: 280px
      background-image url("https://yanxuan.nosdn.127.net/db2f9b75a59cbb6a9867dcd226b8ef55.gif?imageView&quality=75")
      background-repeat: no-repeat
      background-size 100%
      .bestShellWraper
        position absolute
        top: 45px
        right 74px
        width 168px
        height 168px
        img
          width 168px
          height 168px
        .price
          position: absolute
          left: 2px
          bottom: 8px
          width: 152px
          height: 32px
          background: #F48F18
          padding 0 7px
          border-radius 16px
          z-index: 50
          text-align center
          line-height 32px
          
    .hotActiveList
      display flex
      flex-wrap wrap
      justify-content: space-around
      align-content space-around
      padding 18px 18px 0
      
      .itemWraper
        position: relative;
        width: 351px
        height: 186px
        background-image url("https://yanxuan.nosdn.127.net/ee26de3a440f1253efd9d2b6bc4b739d.png?imageView&thumbnail=375x0&quality=75")
        background-repeat: no-repeat
        background-size 100%
        margin-bottom 8px
        img
          position: absolute
          right: 6px
          top: 0
          bottom: 0
          margin auto 0
          width: 160px
          height: 160px
    .facorible
      width: 231px
      height: 220px
      /*background: yellow*/
      background-image: url("https://yanxuan.nosdn.127.net/b30105f1c452dfa26cb401351d971c0b.png?imageView&thumbnail=250x0&quality=75")
      background-repeat:no-repeat
      background-size 100%
      
      
</style>
