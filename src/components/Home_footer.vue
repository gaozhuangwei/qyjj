<template>
    <div class="home_footer">
        <img src="../../public/shaomaguanzhu.jpg" alt="微信关注">
        <ul>
            <li v-for="item in footer" :key="item.Id">
                <a :href="item.SmallImgUrl">
                    <img :src="item.BigImgUrl" :alt="item.Name">
                    <span>{{item.Name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .home_footer{
        width:100%;
        background:#f4f8fb;
        margin-bottom:3.125rem;
    }
    .home_footer img{
        display: block;
        width:100%
    }
    .home_footer ul{
        width:100%;
        text-align: center;
        font-size: .75rem;
        overflow: hidden;
        padding:.9375rem 0;
    }
    .home_footer ul li{
        float: left;
        width:33.33%;
        height:3.125rem;
        line-height: 3.125rem;
    }
    .home_footer ul li a{
        display: block;
        width:100%;
        height:100%;
    }
    .home_footer ul li a img{
        float: left;
        width:1.5625rem;
        height:1.5625rem;
        margin-top:.75rem;
        margin-left:1.25rem;
    }
    .home_footer ul li a span{
        float: left;
        line-height: 1;
        width:4.9rem;
        height:.875rem;
        margin-top:1.15rem;
        border-right:.0625rem solid #d2cfcf;
    }
    .home_footer ul li:nth-of-type(3n) a span{
        border-right:0;
    }
</style>

<script>
    export default {
        computed:{
            footer(){
               return this.$store.state.Home_footer;
            }
        }
    }
</script>


