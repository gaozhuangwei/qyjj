<template>
  <div id="app">
    <headers class="home_header"></headers>
    <!--内容显示组件-->
    <router-view class="app_content"/>
    <fter></fter>
    <!--底部组件切换导航-->
    <div id="nav">
      <router-link to="/">
        <dl>
          <dt><span class="iconfont icon-shouye1"></span></dt>
          <dd>首页</dd>
        </dl>
      </router-link>
      <router-link to="/product">
        <dl>
          <dt><span class="iconfont icon-fenlei"></span></dt>
          <dd>产品中心</dd>
        </dl>
      </router-link>
      <router-link to="/brand">
        <dl>
          <dt><span class="iconfont icon-ziyuan"></span></dt>
          <dd>品牌中心</dd>
        </dl>
      </router-link>
      <router-link to="/contact">
        <dl>
          <dt><span class="iconfont icon-lianxiwomen"></span></dt>
          <dd>联系我们</dd>
        </dl>
      </router-link>
    </div>
    
  </div>
</template>

<script>
    import headers from './components/Home_header'
    import fter from './components/Home_footer'
    export default {
      components:{
        headers,fter
      }
  
    }
</script>


<style>
  #nav{
    width:100%;
    height:3.125rem;
    background: #fff;
    position: fixed;
    bottom:0;
    border-top:.03125rem solid #eee;
    text-align: center;
  }
  #nav dl{
    display: inline-block;
    width:25%;
    height:3.125rem;
  }
  #nav dl dt span{
    font-size: 1.25rem;
    line-height: 1.875rem;
  }
  #nav dl dd{
    font-size: .75rem;
    line-height: 1.125rem;
  }
  .router-link-exact-active{
    color:#07ccb2;
  }
  .home_header{
    position: fixed;
    top:0;
  }
  .app_content{
    margin-top:3.75rem;
    padding-bottom: 3.125rem;
  }
</style>
