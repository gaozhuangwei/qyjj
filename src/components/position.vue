<template>
    <div class="posi" v-gd="vis" dis="260" ref="top">
        <div class="zw_bg">
            <img src="../../public/logo.png"/>
            <div class="index_slogn">
                <h1>选择全友 共创辉煌</h1>
                <h3>我们为激情、敬业的您提供家居行业最绚丽宽广的职业舞台</h3>
            </div>
            <div class="select">
                <select ref="select">
                    <option v-for="(item,index) in type" :key="index">{{item}}</option>
                </select><br/>
                <button v-on:click="goPosition1">搜索</button>
            </div>
        </div>
        <div class="jp">
            <div class="jp_title"> 
                <p>急聘职位 <span>HOT POSITIONS</span></p>
                <a href="#">更多</a>
            </div>
            <div class="row_2">
                <hotPosition></hotPosition>
            </div>
        </div>

        <div class="gotop" v-show="vis.flag" @click="handlegoTop">回顶部</div>
    </div>
</template>

<script>
import hotPosition from "./hotPosition.vue"
export default{
    data(){
        return{
            datas:this.$store.state.contactSqzw.data,
            type:[],
            vis:{
                  flag:false
               },
            // selectVal:""
        }   
    },
    components:{
        hotPosition
    },
    created(){
        for(var prop in this.datas){
            this.type.push(prop);
        }
    },
    methods:{
        handlegoTop(){
            this.$refs.top.scrollTop=0;
        },
        goPosition1(){
            let selectVal=this.$refs.select.value;
            this.$router.push("/posi/"+selectVal);
        }
    }
}
</script>

<style>
.posi{
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    overflow:auto;
}
.posi .zw_bg{
    background: url("../../public/contactImg/banner.jpg") no-repeat;
    background-size:cover;
    background-position: center;
    height: 42rem;
}
.posi .zw_bg .index_slogn{
    color: #fff;
    position:absolute;
    top: 10rem;
    font-size: 0.8rem;
}
.posi .zw_bg .select{
    position: absolute;
    top:22rem;
    bottom: 0;
    left: 10%;
    right: 0;
    margin:auto;
}
.posi .zw_bg .select select{
    border: 0;
    height: 2.5rem;
    width: 89%;
    border-radius: 1.6rem;
    padding: 0 0.6rem;
    outline: none;
}
.posi .zw_bg .select button{
    background:#2fc7a0;
    color:#fff;
    height: 2.4rem;
    border-radius: 1.2rem;
    border:0;
    width: 50%;
    font-size:1.1875rem;
    margin:1rem 18%;
    outline: none;
}
.posi .jp{
    padding: 0 0.5rem;
}
.posi .jp .jp_title{
    display: flex;
    justify-content: space-between;
    height: 2rem;
    border-bottom: .0625rem solid #ccc;
    margin-top:2rem; 
}
.posi .jp .jp_title p{
    color:#2fc7a0;
}
.posi .jp .jp_title p span{
    color:#ccc;
    font-size: .8rem;
}
.posi .jp .jp_title a{
    display: inline-block;
    width: 3rem;
    background: #2fc7a0;
    color: #fff;
    text-align: center;
    height: 1.5rem;
    border-radius: 0.5rem;
}
.row_2{
    overflow: scroll;
}

.gotop{
    border: .1rem solid green;
    display: inline-block;
    padding: .0625rem;
    position:fixed;
    right: 1rem;
    bottom:4rem;
    background: #fff;
}
</style>
