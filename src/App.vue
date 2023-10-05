<template>
  <div id="app">
    <div class="header"><img src="./assets/MemorizeIt.png"/>背呗单词</div>
    <div class="headerline"></div>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  
  name: 'App',
    beforeCreate(){
      console.log("create",this.$store.oldNumber)
    },
    mounted(){
      console.log("mounted")
      this.$store.dispatch('getWords')
    }
    
      
}
</script>

<style scoped>
/* .app{
  width:100%;
  height: 100%;
} */
.header{
  height: 50px;
  color: #409EFF;
  background-color: #FFFFFF;
  font-size: 40px;
}
.headerline{
  height: 1px;
  background-color: #409EFF;
  margin-bottom: 3px;
}
img{
  height: 40px;
  width: 40px;
  padding-right: 10px;
  padding-left: 10px;
}
</style>
