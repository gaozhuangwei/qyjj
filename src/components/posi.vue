<template>
    <div>
        <h3 class="posi_title">{{this.$route.params.selectVal}}</h3>
        <ul class="posi_list">
            <li v-for="(item,index) in showData" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            datas:this.$store.state.contactSqzw.data,
            showData:[]
        }   
    },
    created(){
        for(var prop in this.datas){
            if(prop===this.$route.params.selectVal){
                this.showData=this.datas[prop]
            }
        }
    }
}
</script>

<style>
.posi_title{
    color:#00936e;
    font-size: 1.25rem;
    padding: 0.6rem;
    margin-bottom:1.6rem;
}
.posi_list{
    padding: 0.5rem;
}
.posi_list li{
    padding: 0.7rem;
}
.posi_list li:nth-of-type(2n+1){
    background:#eee;
}
</style>
