<template>
  <div class="product">
    <div class="imgcon">
      <img src="../assets/cpimg/cp1.jpg">
    </div>
    <!-- cplist -->
    <div class="cp-list">
      <a class="cp-item" v-for="item in cpimgLiist">
          <div class="item-logo" @click="clickProHander(item.id)">
              <img  :src="item.SmallImgUrl"/>
          </div>
          <p> {{item.Name}}</p>
      </a>
    </div>
    <!--con 2 -->
    <div class="content2">
        <div class="cp-title">
          <p>附近门店</p>
        </div>
        <div class="content2-form">
            <div class="filter-text">
              <input type="text" class="filter-title" placeholder="请输入所在城市"/>
            </div>
            <div class="content2-btn">立即查询</div>
        </div>
    </div>
    <!-- con 3 -->
    <div class="content3">
        <div class="cp-title">
          <p class="cp-title-text" >在线商城</p>
          <div class="cp-title-line" ></div>
        </div>
        <div class="cp-flex-row">
            <a href="https://quanyou.tmall.com">
              <div class="content3-class">
                <img src="../assets/cpimg/cp1.png" />
                <p>天猫</p>
              </div>
            </a>
            <a href="https://mall.jd.com/index-147490.html">
              <div class="content3-class">
                <img src="../assets/cpimg/cp2.png" />
                <p>京东</p>
              </div>
            </a>
            <a href="http://shop.suning.com/70087748/index.html">
              <div class="content3-class">
                <img src="../assets/cpimg/cp3.png" />
                <p>苏宁</p>
              </div>
            </a>
            <a href="https://list.vip.com/1830621.html">
              <div class="content3-class">
                <img src="../assets/cpimg/cp4.png" />
                <p>唯品会</p>
              </div>
            </a>
        </div>
    </div>
    <!-- con4 -->
    <div class="content4">
      <div class="cp-title">
          <p class="cp-title-text" >常见问题</p>
          <div class="cp-title-line" ></div>
      </div>
      <div class="content4-btn" v-for="ite in QATypeList">{{ite.Name}} <span class="iconfont icon-jiantou-you"></span>  </div>



    </div>



  </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions}  from 'vuex'
export default {
  data() {
    return {
      cpimgLiist:[],
      QATypeList:[]
    }
  },
  created() {
    this.cpimgLiist=this.$store.state.product;
    this.QATypeList=this.$store.state.QATypeList;
     
    // console.log(this.cpimgLiist)
  },
  methods: {
    clickProHander(id){
      this.$router.push("/product/"+id)
    }
  },
}
</script>
<style scoped>
.imgcon img{height:9.375rem;width:100%;}
.cp-list{margin:.625rem;padding: .625rem .625rem 0;display: flex;flex-wrap: wrap;justify-content: center;}
.cp-list .cp-item{width: calc(100% / 3 );min-width: calc(100% / 3 );max-width: calc(100% / 3 );
padding: .9375rem 0;background-color: #fff;display: block;text-align: center;}
.cp-item .item-logo img{width:2.375rem; }
.cp-list .cp-item:nth-child(2n) {background-color: #f4fcfa;}
.cp-list .cp-item:nth-child(10) {background-color: #fff;}
.cp-item p{color: #333;text-align: center;padding: .375rem .1875rem 0;font-size: .8125rem;}

.content2{height: 15.625rem;width: 100%;background-color: #698d84;background-image: url("../assets/cpimg/dt.jpg");background-size: 100% 100%;}
.cp-title{padding: 1.875rem 0;text-align: center;font-size: .875rem;color: #fff;}
.content2-form{width: 80%;margin: 0 auto 1.25rem;}
.filter-text{padding: 0 1.875rem 0 .625rem;background: #fff;margin-bottom: 1.1875rem;}
.filter-text .filter-title{height: 2.125rem;padding-left: .625rem;width: 100%;border: 0;outline: 0;}
.content2-btn{line-height: 2.5rem;width: 100%;border: 0.5px solid #fff;text-align: center;border-radius: 3px;font-size:.955rem;color: #fff;       }  
  
.cp-title .cp-title-text{color: #000;}
.cp-title-line{width: 1.375rem;margin:.4375rem auto 0;height: 0.75px;background: #2fc7a0;}
.content3{height: 11.875rem;}
.content3  .cp-flex-row{display: flex;justify-content:space-around;text-align: center; }
.content3-class img{width: 3.5625rem;}
.content3-class p{color: #717171;font-size:.8125rem;}

.content4{height: 15.4375rem;background: #f5f9f8;}
.content4-btn{width: 19rem;line-height: 2.375rem;background: #ffffff;font-size: .8125rem;color: #666666;margin:0 auto .6875rem;text-align: center}
.content4-btn span{margin-left: .625rem;font-size: .8125rem;}


</style>


