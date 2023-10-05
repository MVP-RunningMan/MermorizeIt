<template lang="">
    <div class="SummaryItem">
        <el-divider></el-divider>
        <el-row type="flex" justify="center">
            <el-col :span="3" :offset="3">{{word.word}}</el-col>
            <el-col :span="4">
                <div class="shutter" @click='changeShow' v-show='!showTranslations'>&nbsp;</div>
                <div class="translations" @click='changeShow' v-show='showTranslations'>{{word.translations}}</div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'SummaryItem',
    data(){
        return{
        showTranslations : false,
        }
    },
    props:['word'],
    methods:{
        changeShow(){
            this.showTranslations = !this.showTranslations
        }
    }
}
</script>
<style scoped>
    .translations{
        width: 50%;
        height: 100%;
    }
    .shutter{
        border-radius: 5px;
        width: 70%;
        height: 100%;
        background-color: #409EFF;
    }
    .el-row{
        padding: 0px;
    }
    .el-col{
        width: 40%;
        height: 100%;
    }
    
</style>