<template lang="">
    <div class="detailsCard">
        <el-row type="flex" :gutter="20" justify="center">
            <el-col :span="16">
                <el-card class="box-card">
                    <el-button style="float: right; padding: 10px" type="primary" @click="next">下一个</el-button>
                    <div class="text item">
                        <el-row type="flex" :gutter="20">
                            <el-col :span="6" :offset="1">
                                <h1>{{using[0].word}}</h1>
                            </el-col>
                            <el-col :span="4">
                                <h3>UK:</h3>
                            </el-col>
                            <el-col :span="4">
                                <h3>US:</h3>
                            </el-col>
                        </el-row>
                        <h4>单词解释</h4>
                        <el-divider></el-divider>
                        <el-row type="flex" :gutter="20">
                            <el-col :span="6" :offset="1">
                                <div v-for="(translation,index) in using[0].translations" :key="index">
                                    <div>{{translation}}</div>
                                </div>
                            </el-col>
                        </el-row>
                        <h4>例句</h4>
                        <el-divider></el-divider>
                        <el-row type="flex">
                            <el-col :span="6" :offset="1">
                                <div class="egs"  v-for="(obj,index) in using[0].egs" :key="index">
                                    <div>{{obj.eg}}</div>
                                    <div>{{obj.egTranslation}}</div>
                                    <el-divider></el-divider>
                                </div>
                                
                            </el-col>
                        </el-row>
                    </div>  
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>

import { mapState } from 'vuex'

import { mapMutations } from 'vuex'

export default {
    name:'DetailsCard',
    computed: mapState(['using','newNumber','oldNumber','doneNewNumber','doneoldNumber']),
    methods:{
        next(){
            this.renderNext()
            this.nextOne()
        },
        ...mapMutations(['nextOne','renderNext'])
    }
}
</script>
<style scoped>
    .el-col{
        width: 70%;
    }
    .el-row{
        padding: 0px;
    }
</style>