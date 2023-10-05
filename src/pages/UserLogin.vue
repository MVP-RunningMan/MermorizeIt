<template>
    <div class="userlogin">
        <el-row type="flex" :gutter="20" justify="center">
            <el-col :span="8">
                <el-card class="box-card">
                    <div class="text item">
                         <el-form label-width="80px" >
                                <el-form-item label="账号">
                                        <el-input v-model="username"></el-input>
                                </el-form-item>
                                <el-form-item label="密码">
                                        <el-input v-model="password"></el-input>
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="onSubmit">登录</el-button>
                                    <router-link to="/wordpart/todaysummary" ><el-button type="primary" @click="onSubmit" >登录</el-button></router-link>
                                    <el-button @click="test">注册</el-button>
                                </el-form-item>
                        </el-form>
                    </div>  
                </el-card>
            </el-col>
        </el-row>
        
    </div>
</template>
<script>
export default {
    name:'UserLogin',
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods:{
        onSubmit(){
            this.$axios.post('http://localhost:3000/isLogin', {
                username: this.username,
                password: this.password
            })
            .then(response => {
                localStorage.setItem("isLogin",response.data.success)
                console.log(this.username);
            })
            .catch(function (error) {
                console.log(error);
                console.log(this.username);
            });
        },
        test(){
            localStorage.setItem('isLogin',true)
        }
    }
}
</script>
<style scoped>
    a{
        padding: 10px;
    }
    .userlogin{
        margin-top: 70px;
    }
</style>