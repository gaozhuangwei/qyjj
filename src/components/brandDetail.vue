<template>
  <div>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: this.$store.state.brand
    };
  }
};
</script>

<style scoped>
 .new1 ul li{
    display:flex;
    margin:0 1.125rem;
    padding:.9375rem 0;
    border-bottom: .0625rem solid #eee;
}
.new1 ul li img{
    width:8.125rem;
    height:5rem;
}
 .new1 ul li .xinxi{
    width:12.25rem;
    height:5rem;
    padding-left:.8125rem;
}

 .new1 ul li .xinxi div{
    height:2.9rem;
    overflow: hidden;
    padding-top: .3125rem;
}
.new1 ul li .xinxi p{
    color:#999;
    font-size: .875rem
    }


</style>
