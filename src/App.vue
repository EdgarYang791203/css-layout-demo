<script setup>
import { ref } from "vue";
import Banner from "./assets/banner.webp";

const sidebarLinks = ref([
  { name: "白頭翁的特性", active: true },
  { name: "白頭翁的故事", active: false },
  { name: "白頭翁的美照", active: false },
  { name: "白頭翁的危機", active: false },
]);

const cards = ref([
  {
    title: "外觀",
    content:
      "白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。",
  },
  {
    title: "棲地",
    content:
      "白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。",
  },
  {
    title: "食性",
    content:
      "以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。",
  },
]);
</script>

<template>
  <div class="layout text-center">
    <div class="logo xl:top-[46.67px] lg:top-[3.2vw]">
      <div class="bird-wrap">
        <div class="bird">
          <div class="stripe"></div>
        </div>
      </div>
    </div>
    <div
      class="sidebar xl:pt-[78.33px] xl:px-[67.5px] lg:pt-[5.4vw] lg:px-[4.7vw]"
    >
      <h2
        class="font-bold xl:text-3xl xl:leading-10 lg:text-[2vw] lg:leading-[2.8vw]"
      >
        白頭翁不吃小米
      </h2>
      <ul class="xl:pt-[75.67px] lg:pt-[5.3vw]">
        <li v-for="link in sidebarLinks" :key="link.name">
          <a
            href="#"
            :class="[
              'leading-[21px] mb-[21px] inline-block hover:border-[#AA6666] border-b-[1px]',
              {
                active: link.active,
              },
            ]"
          >
            <span>{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="content">
      <div
        :style="{ backgroundImage: `url(${Banner})` }"
        class="w-full xl:h-[634px] h-[44vw] bg-cover flex justify-end items-end"
      >
        <div class="text-white text-right xl:pr-[44.75px] xl:pb-[36.85px]">
          <h1 class="font-bold xl:text-5xl lg:leading-[65px] pb-[4px]">
            白頭翁 (Chinese bulbul)
          </h1>
          <p class="xl:text-lg lg:leading-[25px]">
            又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
            年。
          </p>
        </div>
      </div>
      <div
        class="w-full xl:h-[367.15px] xl:pt-[58.15px] xl:px-[50.74px] lg:h-[25.5vw] lg:pt-[4vw] lg:px-[3.5vw] flex justify-between"
      >
        <div
          v-for="card in cards"
          :key="card.title"
          class="xl:w-[278.51px] lg:w-[19vw] flex justify-between items-start"
        >
          <h3 class="card-title font-bold xl:text-4xl lg:text-2xl relative">
            <span>{{ card.title }}</span>
            <div
              class="absolute z-10 right-[-13px] bottom-[-12px] w-[25px] h-[25px] opacity-60"
            >
              <div
                class="bg-[#AA6666] rounded-[50%] w-full h-full relative before:z-10 before:absolute before:w-[9px] before:h-[9px] before:top-[8px] before:left-[8px] before:bg-[#DCCCBC] before:rounded-[50%]"
              ></div>
            </div>
          </h3>
          <p class="tracking-normal xl:w-[199.66px] lg:w-[13.9vw] text-left">
            {{ card.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  position: relative;
}
.logo {
  position: absolute;
  z-index: 5;
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
.sidebar {
  width: 24%;
  max-width: 345px;
}
.content {
  flex: 1;
  background-color: #dcccbc;
}
.card-title {
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}
</style>
