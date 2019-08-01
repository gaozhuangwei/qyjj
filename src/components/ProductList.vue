<template>
   <div>
   
      <div class="cp-banner">
         <img :src="list[0].BigImgUrl">
      </div>
      <!-- nav -->
      <div class="cp-nav">
            <div  v-for="(item,index) in ChirldProductType" @click="getList(index)" class="nav-item"  v-bind:class="{active:index==isActive}" >{{item.Name}}</div>
      </div>
      <!-- list -->
      <component :is="componentNam"></component>
   </div>
</template>
<script>

import com1 from './ProClassList'

export default {
    data() {
        return {
            isActive:0,
            list:[],
           componentNam:"com1",
            ChirldProductType:[]
        }
    },
    components:{
       com1
    },
    created() {
         this.getDate();
       
    },
    methods: {
       getList(index){
            this.isActive=index;
            this.componentNam="com1";
           
        },
        getDate(){
            var  id=this.$route.params.id;
            var product = this.$store.state.product;
            this.list=product.filter((item)=>{
                return  item.id==id
            })
            this.ChirldProductType=this.list[0].ChirldProductType
            //console.log(this.ChirldProductType)
        }
    },
}
</script>


<style scoped>
.cp-header{line-height: 3.5625rem;display: flex;}
.cp-header .logo{width: 6.8125rem;height:1.5rem;}

.cp-banner  img{width: 100%;}
.cp-nav{padding: .6875rem 0;border-bottom: 1px solid #eee; background: #fff;display: flex;justify-content: center}
.nav-item{margin:0 .6875rem;font-size: .8125rem;color:#333;line-height: 2.125rem;}
.active{color: #2fc7a0;border-bottom-color: rgba(47, 199, 160, 1);}
</style>
