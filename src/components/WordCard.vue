<template lang="">
    <div class="wordCard">
        <el-row type="flex" :gutter="20" justify="center">
            <el-col :span="16">
                <el-card class="box-card">
                    <div class="text item">
                        <el-row type="flex" :gutter="20" justify="center">
                            <h1>{{using[0].word}}</h1>
                        </el-row>
                        <el-row type="flex" :gutter="20" justify="center">
                            <el-button type="text">英式发音</el-button>
                            <el-button type="text">美式发音</el-button>
                        </el-row>
                        <el-row type="flex" :gutter="20" justify="center">
                            <h3 v-show="showEg">{{using[0].egs[0].eg}}</h3>
                        </el-row>
                        <el-row type="flex" :gutter="20" justify="center">
                        <el-button type="success" v-show="!showEg" @click="isKnown">认识</el-button>
                        <el-button type="success" v-show="showEg" @click="noMemory">想起来了</el-button>
                        <el-button type="danger" @click="unKnown">不认识</el-button>
                        </el-row>
                        <div class="progress">
                            <el-row type="flex" :gutter="20" justify="center">
                                <el-col :span='8'>新词</el-col>
                                <el-col :span='8'>复习</el-col>
                            </el-row>
                            <el-row type="flex" :gutter="20" justify="center">
                                <el-col :span='8'><el-progress :percentage="doneNewNumber/newNumber*100"></el-progress></el-col>
                                <el-col :span='8'><el-progress :percentage="doneoldNumber/oldNumber*100"></el-progress></el-col>
                            </el-row>
                        </div>
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
    name:'WordCard',
    computed: mapState(['using','showEg','newNumber','oldNumber','doneNewNumber','doneoldNumber']),
    methods:{
        ...mapMutations(['isKnown','noMemory','unKnown'])
    }
}
</script>

<style>
    .wordCard{
        padding: auto;
    }
    .el-row{
        padding-top: 2%;
        height: 100%;
    }
    .progress{
        padding-top: 5%;
    }
    
</style>