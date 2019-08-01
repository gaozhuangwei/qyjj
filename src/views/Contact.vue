<template>
<!-- 联系我们 -->
    <div class="contact">
        <img src="../../public/contactImg/1.jpg"/>
        <div class="par_model">
            <div class="model model_one">
                <p>我要买家具</p>
                <p></p>
                <div>{{datas.mjumsg}}</div>
                <a href="/buyfurniture">立即购买</a>
            </div>
        </div>

         <div class="model model_two">
                <p>我要提建议</p>
                <p></p>
                <div>{{datas.tjymsg}}</div>
                <a href="/advice">填写建议</a>
        </div>

        <img src="../../public/contactImg/2.jpg"/>
        <div class="par_model">
            <div class="model model_one">
                <p>我想加入全友</p>
                <p></p>
                <div>{{datas.jrqymsg}}</div>
                <a href="/position">查看职位</a>
            </div>
        </div>

         <div class="model model_two">
                <p>我想加盟门店</p>
                <p></p>
                <div>{{datas.jmmdmsg}}</div>
                <a href="/join">立即加盟</a>
        </div>

        <img src="../../public/contactImg/3.jpg"/>
        <div class="par_model">
            <div class="model model_one">
                <p>我想工程合作</p>
                <p></p>
                <div>{{datas.gchzmsg}}</div>
            </div>
        </div>

         <div class="model model_two">
                <p>我想媒体合作</p>
                <p></p>
                <div>{{datas.mthzmsg}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            datas:this.$store.state.contact,
        }
    }
}
</script>
<style>
.contact{
    background:#f5faf9;
    padding-bottom:2rem; 
}
.contact img{
    width: 100%;
}
.contact .model{
    width: 19rem;
    margin: 0 auto;
    padding: 1.875rem 1rem;
}
.contact .model_one{
    background: #fff;
    position: absolute;
    top:-2rem;
    left: 0;
    right: 0;
    margin: auto;
}
.contact .model p:nth-of-type(1){
    text-align: center;
    line-height: 2rem;
}
.contact .model p:nth-of-type(2){
    width:2.3rem;
    height:.0625rem;
    background:#2fc7a0;
    margin:.45rem auto;
}
.contact .model a{
    display:inline-block;
    background: #2fc7a0;
    color: #fff;
    width: 100%;
    line-height: 2.5rem;
    text-align: center;
    border-radius: 0.15rem;
    margin-top: 2rem;
    }

.par_model{
    position: relative;
}

.contact .model_two{
    margin-top: 15rem;
}
</style>
