<template lang="">
    <div class="briefSummary">
        <el-row type="flex" justify="center">
            <el-col :span="16">
                <el-card class="box-card">
                    <el-row type="flex" justify="center">
                        <el-col :span="4" :offset="2"><span>单词小结</span></el-col>
                        <el-col :span="4" :offset="16"><el-button type="primary" @click="nextGrop">继续学习</el-button></el-col>
                    </el-row>
                    <div class="text item" v-for = "(word,index) in done" :key = 'index'>
                        <SummaryItem :word='word'/>
                    </div>  
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import { mapState } from 'vuex'
import { mapMutations } from 'vuex'

import SummaryItem from './SummaryItem.vue';

export default {
    components:{
        SummaryItem
    },
    computed: mapState(['done']),
    methods:{
        ...mapMutations(['nextGrop'])
    }
}
</script>
<style scoped>
    .el-button{
        width: 100%;
        height: 100%;
    }
    .el-row{
        padding: 0px;
    }
    .el-col{
        height: 100%;
    }
</style>