<template>
  <div id="app">
    
    <router-view></router-view>
    
    <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
  
  import Footer from './components/Footer/Footer'

  export default {
  name: 'App',
    components:{
      Footer
    },
    mounted () {
      document.addEventListener('touchstart',function(event) {
//			console.log('111111')
        event.preventDefault()
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
