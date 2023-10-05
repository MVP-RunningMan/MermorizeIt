import Vuex from 'vuex'

import Vue from 'vue'

import axios from 'axios';

Vue.use(Vuex)

const actions ={
    getWords({ commit }){
        axios({
            method: "get",
            url: "http://localhost:3000/words", // 接口地址
          }).then(response => {
                commit('getWords',response)
            }).catch(error => console.log(error, "error"));
    },
    getIslogin({ commit }){
        axios({
            method: "get",
            url: "http://localhost:3000/islogin", // 接口地址
          }).then(response => {
            console.log(response)
                commit('getIslogin',response)
            }).catch(error => console.log(error, "error"));
    }
}

const mutations = {
    getWords(state,response){
        state.words = response.data[0].words
        state.using = state.words
        // state.newNumber = response.data.newNumber
    },
    isKnown(state){
        //点击认识时的回调,当showEg为false表明用户认识该词汇,showEg为true时表明用户已经查看例句
          state.isknown = true
          state.showDetails = true
    },
    noMemory(state){
        state.showDetails = true
    },
    unKnown(state){
        //不认识的回调
        if(state.showEg == false){
            state.showEg = true
        }else{
        state.showDetails = true
        }
    },
    nextOne(state){
        state.showEg = false
        state.showDetails = false
    },
    renderNext(state){
        if(state.using[0].round == undefined){
            if(state.showEg == false){
                state.done.push(state.using.shift())
                if(state.done.length == 7){
                    state.showSummary = true
                }
                if(state.using[0].isLearned == "false"){
                    state.doneNewNumber += 1
                }else{
                    state.doneoldNumber += 1
                }
            }else{
                state.using[0].round = 2
                state.using.push(state.using.shift())
            }
            return
        }
        if(state.using[0].round == 2){
            if(state.showEg == false){
                state.using.push(state.using.shift())
                state.using[0].round = 1
            }else{
                state.using.push(state.using.shift())
                state.using[0].round = 2
            }
            return
        }
        if(state.using[0].round == 1){
            if(state.showEg == false){
                state.using.push(state.using.shift())
                delete state.using[0].round
            }else{
                state.using.push(state.using.shift())
                state.using[0].round = 2
            }
            return
        }
        
    },
    nextGrop(state){ 
        axios.post('http://localhost:3000/updateWords', {
            title: "Content-Type: application/json",
            words:state.done
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        state.done = []
        state.showSummary = false
    },
    getIslogin(state,response){
        state.isLogin = response.data.result.islogin
        console.log(state.isLogin)
        console.log("哈哈")
    }
}

const state = {
    words:[],
    newNumber : 10,
    oldNumber : 1,
    doneNewNumber : 0,
    doneoldNumber : 1,
    using : [],
    done : [],
    isKnown : false,
    showDetails : false,
    showEg : false,
    showSummary : false,
    isLogin : false,
}

const store =  new Vuex.Store({
    actions,
    mutations,
    state
})

export default store