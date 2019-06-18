<template>

  <div class="msiteWrap">
    <Header/>
    <div class="mainWraper">
      <div class="main">
        <div class="swiper-container">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(p,index) in categoryModule" :key="index">
              <a>
                <img :src="p.titlePicUrl">
              </a>
            </li>
          </ul>
          <div class="swiper-pagination"></div>
        </div>
        <div class="infoWraper">
          <ul class="infoList">
            <li>
              <span>
                <i class="iconfont icon-airudiantubiaohuizhi-zhuanqu_yiwutong"></i>
              </span>
              <span>网易自营品牌</span>
            </li>
            <li>
              <span>
                <i class="iconfont icon-anquan"></i>
              </span>
              <span>30天无忧退货</span>
            </li>
            <li>
              <span>
                <i class="iconfont icon-tuikuan"></i>
              </span>
              <span>48小时无忧退款</span>
            </li>
          </ul>
        </div>
        <div class="catergryList">
          <div class="listItem">
            <img src="../../../static/imgs/nvsheng/1.jpg" alt="">
            <p>新品首发</p>
          </div>
          <div class="listItem" v-for="(item,index) in kingKongList">
            <img :src="item.picUrl" alt="">
            <p>{{item.text}}</p>
          </div>
        </div>
        <Activity/>
      </div>
      
    </div>
    
  </div>
  
 
  
  
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Header from '../../components/Header/Header'
  import Activity from './Activity'
  
  export default {
    name: 'Msite',
    computed:{
      ...mapState(['homeDatas','kingKongList']),
      categoryModule() {
        return this.homeDatas.categoryModule
      }
    },
    async mounted() {
      await this.$store.dispatch('getHomedatas')
      console.log(this.homeDatas)
      new Swiper('.swiper-container',{
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
        },
        
      })
      new BScroll('.mainWraper',{
        click:true
      })
    },
    components:{
      Header,
      Activity
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .msiteWrap
    width 100%
    height 370px
    .mainWraper
      height 1000px
      background: yellow
      .main
        height 3000px
        .swiper-container
          width 100%
          height 370px
          .swiper-wrapper
            width 100%
            height 370px
            .swiper-slide
              float left
              img
                width 100%
                height 370px
        .infoWraper
          width: 100%
          height: 72px
          padding 0 60px
          
          .infoList
            display: flex
            height 72px
            align-items center
            li
              width: 228px
              height: 36px
              color red
        .catergryList
          display flex
          flex-wrap wrap
          width: 750px
          height: 341px
          
          overflow hidden
          .listItem
            display flex
            align-items center
            flex-direction column
            justify-content space-around
            margin 10px 20px 9px
            
            width: 110px
            height: 156px
            img
              width: 110px
              height: 110px
              border-radius 50%
            p
              font-size 24px
              margin-top 10px
  
</style>
