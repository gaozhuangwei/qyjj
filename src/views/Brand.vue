<template>
<!-- 品牌中心 -->
    <div class="brand">
        <!-- banner图 -->
        <div class="bigimg">
            <img src="../../public/brandImg/ppzx1.jpg"/>
        </div>
        <!-- 企业资讯 -->
        <div class="qyzx">
            <div class="qyzx-title">
                <p>企业资讯</p>
                <div></div>
            </div>
            <div class="new1">
                <ul>
                    <li v-for="(item,index) in datas.qyzx" :key="index">
                        <div>
                            <img src="../../public/brandImg/qyzx1.jpg" />
                        </div>
                        <div class="xinxi">
                            <div>{{item.Title}}</div>
                            <p>{{item.PubDate}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="more">
                <a href="/brandDetail">查看更多 ></a>
            </div>
        </div>
        <!-- 社会责任 -->
        <div class="qyzx">
            <img class="shzeimghead" src="../../public/brandImg/shzr.jpg"/>
            <div class="qyzx-title">
                <p>社会责任</p>
                <div></div>
            </div>
            <div class="new1">
                <ul>
                    <li v-for="(item,index) in datas.shzr" :key="index">
                        <div>
                            <img src="../../public/brandImg/shzr1.jpg" />
                        </div>
                        <div class="xinxi">
                            <div>{{item.Title}}</div>
                            <p>{{item.PubDate}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="more">
                <a href="/brandDetail">查看更多 ></a>
            </div>
        </div>
        <!-- 绿色产业链 -->
         <div class="qyzx lscyW">
            <div class="qyzx-title">
                <p>绿色产业链</p>
                <div></div>
            </div>
            <img class="shzeimghead" src="../../public/brandImg/lscy.jpg"/>
            <br/><br/>
            <div class="new1">
                <div>{{datas.greencyl.msg}}</div>
            </div>
            <div class="more">
                <a href="/brandDetail">查看更多 ></a>
            </div>
        </div>
        <!-- 胖达yoyo -->
        <div class="qyzx lscyW">
            <div class="qyzx-title">
                <p>胖达YoYo</p>
                <div></div>
            </div>
            <img class="shzeimghead" src="../../public/brandImg/yoyo_pin.jpg"/>
            <br/><br/>
            <div class="new1">
                <div>{{datas.yoyo.msg}}</div>
            </div>
            <div class="more">
                <a href="/brandDetail">快来撩我 ></a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            datas:this.$store.state.brand,
        }
    }
}
</script>
<style scoped>
.brand .bigimg img{
    width:100%;
}
.brand .qyzx{
    width:100%;
    border-bottom: 0.5rem solid #eee;
}
.brand .qyzx .qyzx-title{
    text-align:center;
    padding:1.2rem 0;
    font-size:0.9rem;
}
.brand .qyzx .qyzx-title div{
    width:2.3rem;
    height:.0625rem;
    background:#2fc7a0;
    margin:.45rem auto;

}
.brand .qyzx .new1 ul li{
    display:flex;
    margin:0 1.125rem;
    padding:.9375rem 0;
    border-bottom: .0625rem solid #eee;
}
.brand .qyzx .new1 ul li img{
    width:8.125rem;
    height:5rem;
}
.brand .qyzx .new1 ul li .xinxi{
    width:12.25rem;
    height:5rem;
    padding-left:.8125rem;
}

.brand .qyzx .new1 ul li .xinxi div{
    height:2.9rem;
    overflow: hidden;
    padding-top: .3125rem;
}
.brand .qyzx .new1 ul li .xinxi p{
    color:#999;
    font-size: .875rem
    }

.brand .more{
    width: 100%;
    height: 2.125rem;
    margin: 1.25rem auto;
    text-align: center;
}
.brand .more a{
    display: inline-block;
    width: 7rem;
    line-height: 2rem;
    border-radius: 0.2rem;
    border: .0625rem solid #ccc;
}
.shzeimghead{
    width: 100%;
}
.lscyW{
    box-sizing: border-box;
    padding: 0 1rem;
}
</style>
