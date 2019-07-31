<template>
  <div class="home">
    <!--轮播图-->
    <banner></banner>
    <div class="home_content">
      <h2>新品推荐</h2>
      <a href="/product/kct">
        <img src="../../public/home_01.jpg" alt="客餐厅">
        <button>查看客餐厅 ></button>
      </a>
      <a href="/product/kct">
        <img src="../../public/home_02.jpg" alt="卧室">
        <button>查看卧室 ></button>
      </a>
      <a href="/product/kct">
        <img src="../../public/home_03.jpg" alt="少年房">
        <button>查看少年房 ></button>
      </a>
      <a href="/product/kct">
        <img src="../../public/home_04.jpg" alt="书房">
        <button>查看书房 ></button>
      </a>
      <a href="/product/kct">
        <img src="../../public/home_05.jpg" alt="厨房">
        <button>查看厨房 ></button>
      </a>
    </div>
  </div>
</template>

<script>
  import banner from '../components/Home_banner'
  export default {
    components:{
      banner,
    }
  
  }
</script>
<style scoped>
  .home_content{
    width:100%;
    padding-top:1.25rem;
    text-align: center;
  }
  .home_content h2{
    font-size:1.125rem;
    font-weight: 400;
  }
  .home_content a{
    display: block;
  }
  .home_content a img{
    display: block;
    width:100%;
    margin:.625rem 0;
  }
  .home_content button{
    width:7.5rem;
    height:2.1875rem;
    line-height: 2.1875rem;
    font-size: .8125rem;
    border:0;
    background:#fff;
    border:.0625rem solid #949393;
    color:#949393;
    margin:.3125rem 0 .9375rem 0;
  }
</style>


