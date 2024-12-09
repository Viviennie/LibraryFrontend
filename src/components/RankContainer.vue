<template>
    <div class="rank-container">
      <div class="image-background"></div>
      <div class="space"></div>
      <div class="content">
        <RankTop />
        <Rank />
      </div>
    </div>
  </template>
  
  <script setup>
  import Rank from "./Rank.vue";
  import RankTop from "./RankTop.vue";
  </script>
  
  <style scoped>
  .rank-container {
    position: relative;
    width: 100%;
    height: 290px;
  }
  
  .image-background {
    background-image: url('../assets/book.jpg');
    background-size: cover;
    background-position: center;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .content {
  position: relative; 
  z-index: 2; 
  width: 80%;
  margin-left: auto; 
  margin-right: auto;
 }

 .space {
  height:230px;
 }
  </style>