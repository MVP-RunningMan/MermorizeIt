<template>
  <div class="wordpart">
      <el-row :gutter="20">
        <el-col :span="16" :offset="4">
          <el-tabs v-model="activeName" @tab-click="toWordShow">
            <el-tab-pane label="单词学习" name="first" ></el-tab-pane>
            <el-tab-pane label="学习设置" name="second"></el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'WordPart',
  data() {
      return {
        activeName: 'first',
      };
    },
  methods:{
    toWordShow(){
      if(this.activeName == 'first'){
        this.$router.push({
          path:'/wordpart/todaySummary'
        })
      }
      if(this.activeName == 'second'){
        this.$router.push({
          path:'/wordpart/setplans'
        })
      }    
    }
  }
}
</script>
<style scoped>
  /* a{
    padding-left: 10px;
    background-color: #FFFFFF;
    color: #409EFF;
    font-size: 20px;
    text-decoration :none;
  } */
</style>