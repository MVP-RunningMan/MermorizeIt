<template lang="">
    <div>
        
        <el-row type="flex" :gutter="20" justify="center">
            <el-col :span="16">
                <el-card>
                    <el-row type="flex" :gutter="20" justify="start" class="days">
                        <el-col :span="2" :offset="1" class="clearPadding">
                            坚持学习
                        </el-col>
                        <el-col :span="1" class="clearPadding">
                            15
                        </el-col>
                        <el-col :span="1" class="clearPadding">
                            天
                        </el-col>
                    </el-row>
                    <el-row type="flex" :gutter="20" justify="center">
                        <el-col :span="22">
                            <el-card>
                                <div class="Summary">
                                    <el-row type="flex" :gutter="20" justify="center">
                                        <el-col :span="11">
                                            <div class="show">
                                                
                                            </div>
                                        </el-col>
                                        <el-col :span="11">
                                            <div class="show">
                                                <el-row type="flex" :gutter="20" justify="center" class="todayplan">
                                                    <el-col :span="8"><div>---今日任务---</div></el-col>
                                                </el-row>
                                                <el-row type="flex" :gutter="20" justify="center">
                                                    <el-col :span="8"><div class="number">100</div>
                                                        <div class="numbertext">---新学词数---</div></el-col>
                                                    <el-col :span="8"><div class="number">200</div>
                                                        <div class="numbertext">---复习词数---</div></el-col>
                                                    <el-col :span="8"><div class="number">300</div>
                                                        <div class="numbertext">---未学词数---</div></el-col>
                                                </el-row>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-row type="flex" :gutter="20" justify="center">
                        <el-col :span="12">
                            <div class="button" @click="toWordShow">开始学习</div>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods:{
    toWordShow(){
        this.$router.push({
          path:'/wordpart/wordshow'
        })
      }
    }
}
</script>
<style scoped>
.Summary{
    height: 250px;
}
.days{
    padding: 0px;
}
.show{
    height: 150px;
    /* background-color: black; */
}
.todayplan{
    text-align: center;
    height: 100px;
}
.number{
    text-align: center;
    font-size: 30px;
}
.numbertext{
    text-align: center;
}
.button{
    height: 40px;
    border-radius: 5px;
    color: aliceblue;
    background-color: #409EFF;
    text-align: center;
    font-size: 30px;
}
    
</style>