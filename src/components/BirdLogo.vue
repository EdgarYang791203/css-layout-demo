<template>
  <div :class="['logo', classList]" :style="styleList">
    <div class="bird-wrap">
      <div class="bird">
        <div class="stripe"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  classList: String,
  styleList: String,
});
</script>

<style scoped>
.logo {
  z-index: 5;
  width: 97.56px;
  height: 97.56px;
  border-radius: 50%;
  background-color: #fff;
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
  border-top-left-radius: 64% 30px;
  border-top-right-radius: 25px 46%;
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
</style>
