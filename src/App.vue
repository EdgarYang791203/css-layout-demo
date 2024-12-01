<script setup></script>

<template>
  <div class="layout text-center">
    <div class="logo">
      <div class="bird-wrap">
        <div class="bird">
          <div class="stripe"></div>
        </div>
      </div>
    </div>
    <div class="sidebar"></div>
    <div class="content"></div>
  </div>
</template>

<style scoped>
.layout {
  width: 100vw;
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  position: relative;
}
.logo {
  position: absolute;
  z-index: 5;
  top: 46.67px;
  left: calc(24% - 48.78px);
  width: 97.56px;
  height: 97.56px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bird-wrap {
  width: 75.96px;
  height: 66.97px;
  padding: 10px;
  /* border: 1px solid #000; */
}
.bird {
  background-color: #333;
  width: 100%;
  height: 100%;
  border-top-left-radius: 50% 25px;
  border-top-right-radius: 20px 45%;
  border-bottom-right-radius: 20px 45%;
  position: relative;
}
.bird::after {
  content: "";
  position: absolute;
  z-index: 10;
  width: 9px;
  height: 9px;
  background-color: #333;
  border-radius: 50%;
  top: calc(50% - 5px);
  right: 20%;
}
.bird::before {
  content: "";
  position: absolute;
  z-index: 10;
  width: 13px;
  height: 7.5px;
  background-color: #333;
  top: 13px;
  right: -9px;
  border-radius: 0 100% 0 0;
  transform: rotate(-12deg);
}
.stripe {
  position: absolute;
  z-index: 5;
  left: 0;
  top: 10px;
  width: 100%;
  height: calc(100% - 20px);
  background-color: #fff;
  border-top-left-radius: 100% 25px;
  border-top-right-radius: 25px 30%;
  border-bottom-right-radius: 30px 60%;
}
.sidebar {
  width: 24%;
  max-width: 345px;
}
.content {
  flex: 1;
  width: 100%;
  background-color: #dcccbc;
}
</style>
