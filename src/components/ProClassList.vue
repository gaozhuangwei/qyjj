<template>
    <div>
  
        <div class="img-list">
            <div class="item-img" v-for="item in 12" @click="showHander">
                <img src="../assets/cpimg/list1.jpg">
            </div>
        </div>
        <!-- 弹窗  -->
        <div class="mask" v-show="flag">
            <div class="box">
                <div class="img">
                    <img :src="imgList[courIndex]" />
                </div>
                <div class="close" @click="closeHander">X</div>
                <div class="btn-box">
                    <span @click="chageImgHander('pre')" ><</span>
                    <span @click="chageImgHander('next')">></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            flag:false,
            courIndex:0,
            imgList:[
                "http://www.quanyou.com.cn/static//UserFiles/UploadFile/20190403/QYJJWebSet20190403170452.jpg",
                "http://www.quanyou.com.cn/static//UserFiles/UploadFile/20190403/QYJJWebSet20190403170429.jpg",
                "http://www.quanyou.com.cn/static//UserFiles/UploadFile/20190403/QYJJWebSet20190403165451.jpg",
                "http://www.quanyou.com.cn/static//UserFiles/UploadFile/20190403/QYJJWebSet20190403165418.jpg"
            ]
        }
    },
    methods: {
        showHander(){
            this.flag=true;
        },
        closeHander(){
            this.flag=false;
        },
        chageImgHander(index){
            if(index=="next"){
                this.courIndex++;
            }
            if(index=="pre"){
                this.courIndex--;
            }
            if(this.courIndex>=3){
                this.courIndex=3
            }else if(this.courIndex<=0){
                this.courIndex=0;
            }
        }
    },
}
</script>


<style scoped>
.img-list{padding-top: .6875rem;}
.img-list .item-img{max-width: calc((100% / 3 ) - .3rem);min-width: calc((100% / 3 ) - .3rem);
display: inline-block;padding: 0 2px 11px 2px;text-align: center;}
.item-img img{width: 6.8125rem;}
.mask{
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
}
.mask .box{height: 20.25rem; position: absolute;top:34%;}

.mask .box img{width: 100%;}
.mask .close {
    position: absolute;
    top: 0rem;
    right: 0rem;
    width: 1.3125rem;
    background: #fff;
    line-height:1.3125rem;;
    font-size:.875rem;
    text-align: center;
    color: #d1d1d1;
}
.mask .btn-box{position: absolute;bottom: 0;width: 100%;text-align: center;}
.btn-box span{
    border-radius: 100%;
    line-height:2.625rem;
    width:2.625rem;
    background-color: #2fc7a0;
    display: inline-block;
    text-align: center;
    margin: 0  .6875rem;
    font-size: .875rem;
    color: #fff;
}
</style>

