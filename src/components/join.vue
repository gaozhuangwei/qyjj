<template>
    <div class="buy_con">
        <input type="text" placeholder="您的称谓"/>
        <input type="text" placeholder="联系电话"/>
        <input type="text" placeholder="加盟地址"/>
        <input type="text" placeholder="常用邮箱"/>
        <input type="text" placeholder="可联系时间"/>
        <div class="btn_con">
            <button>提交</button><button v-on:click="goContact()">返回</button>
        </div>
    </div>
</template>
<script>
    export default{
        methods:{
            goContact(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>

.buy_con{
     background:#f5faf9;
    padding: 1rem 1rem; 
    padding-bottom:14rem; 
}
.buy_con input,textarea{
    outline: none;
    border: 0;
    border-radius: 0.1rem;
    width: 100%;
    margin-bottom: 0.6rem;
    padding-left: 0.5rem;
}
.buy_con .btn_con{
    display: flex;
    justify-content: center
}
.buy_con input{
    line-height: 2rem;
}
.buy_con button{
    color:#fff; 
    border-radius: 0.15rem;
    border: 0;
    width: 45%;
    height: 2.4rem;
    margin: 0.8rem 0.1rem;
}
.buy_con button:nth-of-type(1){
    background:#2fc7a0;
}
.buy_con button:nth-of-type(2){
    background:rgb(201, 198, 198);
}
</style>

