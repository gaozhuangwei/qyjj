<template>
  <div>
    <div class="home_header">
      <img src="../../public/logo.png" alt="logo">
      <img src="../../public/tel_img.png" alt="logo">
    </div>
  </div>
</template>

<style scoped>
    .home_header{
      width:100%;
      height:3.75rem;
      line-height: 3.75rem;
      background-color: #fff;
      position: fixed;
      top:0;
      z-index: 100;
    }
    .home_header img:nth-of-type(1){
      float: left;
      margin-left:1.25rem;
      margin-top:.9375rem;
      width:30%;
    }
    .home_header img:nth-of-type(2){
      float: right;
      margin-right:1.25rem;
      margin-top:.9375rem;
      width:30%;
    }
</style>

