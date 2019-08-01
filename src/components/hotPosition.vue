<template>
<!-- 急聘职位 -->
    <div>
        <div class="row">
            <ul class="position-list">
              <li v-for="(item,index) in type[0]" :key="index">{{item}}</li>
            </ul>
            <ul class="position-list">
              <li v-for="(item,index) in type[1]" :key="index">{{item}}</li>
            </ul>
            <ul class="position-list">
              <li v-for="(item,index) in type[2]" :key="index">{{item}}</li>
            </ul>
            <ul class="position-list">
              <li v-for="(item,index) in type[3]" :key="index">{{item}}</li>
            </ul>
        </div>
       
        <!-- <ul class="smalld">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul> -->
    </div>
</template>

<script>
import { setTimeout, clearInterval } from 'timers';
export default{
    data(){
        return{
            datas:this.$store.state.contactSqzw.data,
            type:[],
            n:0,
            ids:0,
        }   
    },
    computed:{
        // nn:function(){  
        //         let time=5;
        //      let ids=window.setInterval(()=>{  
        //           time=time--;
        //             return  this.n++;
        //             if(time<1){
        //             window.clearInterval(ids)
        //          }
        //         },1000)            
        // }
        // nn:{
        //     get(){
        //        setInterval(()=>{     
        //          return   this.n++;
        //         },1000)
                
        //     },
        //     set(v){
        //         this.n=v;
        //     }
        // }
       
    },
    watch:{
        n:{
            handler(v1,v2){
                console.log(v1,v2);
                // this.changen();
                // if(v1<4){
                //         this.ids=setInterval(()=>{     
                //         return  this.n++;
                //         },1000);
                // }
                
                // if(v1>4){
                //     console.log(this.ids)
                //     // clearInterval(this.ids);
                    
                // }
            }

        }
    },
    methods:{
        changen(){
            this.ids =setInterval(()=>{     
                     this.n++;
              },1000);
              if(n>3){
                  clearInterval(this.ids)
              }
            // if(this.n<=3 && this.n>=0){
            //     this.n++;
            // }else{
            //     this.n=0;
            // }
            // this.changen();
        }
    },
    created(){
        for(var prop in this.datas){
            this.type.push(this.datas[prop]);
        }
        this.type.splice(0,1);
        // console.log(this.type);
        
       
    },
}
</script>

<style>
.position-list li{
    border-bottom: .0625rem solid #ccc;
    line-height: 2.5rem;
    font-size: 1rem;
}
.smalld{
    width: 30%;
    display: flex;
    justify-content:space-between;
    margin:0 auto;
}
.smalld li{
    float: left;
    width:.6rem;
    height: .6rem;
    border-radius: .6rem;
    background:#ccc;
}
.smalld .col{
    background: green;
}
/* .row{ */
    /* width:100rem; */
    /* height: 10rem; */
    /* overflow: scroll; */
    /* white-space: nowrap; */
/* } */
/* .row ul{ */
    /* float: left; */
    /* display: inline-block; */
    /* width:22rem; */
/* } */
</style>
