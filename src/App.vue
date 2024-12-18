<script setup>
import { ref } from "vue";
import BirdLogo from "./components/BirdLogo.vue";
import Banner from "./assets/Banner.webp";

const linkActive = ref(1);

const sidebarLinks = ref([
  { name: "白頭翁的特性", id: 1 },
  { name: "白頭翁的故事", id: 2 },
  { name: "白頭翁的美照", id: 3 },
  { name: "白頭翁的危機", id: 4 },
]);

const handleActive = (id) => {
  if (id) {
    linkActive.value = id;
  }
};

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

const isMenuOpen = ref(false);

const handleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <div class="layout text-center lg:flex-nowrap flex-wrap">
    <BirdLogo
      classList="xl:top-[46.67px] lg:top-[3.2vw] lg:flex lg:absolute hidden"
      styleList="left: calc(24% - 48.78px);"
    />
    <div
      class="sidebar xl:pt-[78.33px] xl:px-[67.5px] lg:w-[24%] lg:max-w-[345px] lg:pt-[5.4vw] lg:px-[4.7vw] w-full lg:z-0 z-10"
      style="box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2)"
    >
      <div
        class="w-full lg:p-0 p-[8vw] lg:block flex lg:justify-start justify-between items-center relative"
      >
        <span class="lg:hidden inline-block" @click="handleMenu">
          <img
            v-if="!isMenuOpen"
            class="w-[24px]"
            src="./assets/menu.svg"
            alt="menu"
          />
          <img v-else class="w-[24px]" src="./assets/close.svg" alt="menu" />
        </span>
        <h2
          class="font-bold xl:text-3xl xl:leading-10 lg:text-[2vw] lg:leading-[2.8vw] text-[20px] leading-[27px] flex-1"
        >
          白頭翁不吃小米
        </h2>
        <span class="lg:hidden inline-block"></span>
        <BirdLogo
          classList="lg:hidden flex scale-50 absolute"
          styleList="top: calc(50% - 48.78px); right: calc(5vw - 22px)"
        />
      </div>
      <ul
        :class="[
          'xl:pt-[75.67px] lg:pt-[5.3vw] lg:h-auto lg:opacity-100 h-0 opacity-0 transition-all',
          { 'h-[53.1vw] opacity-100': isMenuOpen },
        ]"
      >
        <li
          v-for="link in sidebarLinks"
          :key="link.id"
          @click="handleActive(link.id)"
          class="mb-[21px]"
        >
          <a
            href="#"
            :class="[
              'lg:leading-[21px] text-lg leading-[25px] inline-block',
              {
                active: linkActive === link.id,
              },
            ]"
          >
            <span>{{ link.name }}</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="content lg:w-[76%] lg:max-w-[1095px] w-[100%] max-w-none bg-[#dcccbc] lg:min-h-screen"
    >
      <div
        :style="{ backgroundImage: `url(${Banner})` }"
        class="w-full xl:h-[634px] lg:h-[44vw] h-[83vw] bg-cover flex justify-end items-end"
      >
        <div
          class="text-white xl:pr-[45px] xl:pb-[37px] lg:pr-[3.125vw] lg:pb-[2.6vw]"
        >
          <h1
            class="font-bold text-right xl:text-5xl lg:text-[3.3vw] text-[48px] xl:leading-[65px] lg:leading-[4.5vw] leading-[50px] sm:pb-[4px] pb-[9.35px] sm:w-full w-[76vw] lg:pr-0 pr-[7.2vw] ml-auto"
          >
            白頭翁 (Chinese bulbul)
          </h1>
          <p
            class="text-right xl:text-lg lg:leading-[25px] lg:w-full w-[88vw] mr-[6vw] lg:pb-0 pb-[6.4vw]"
          >
            又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10
            年。
          </p>
        </div>
      </div>
      <div
        class="w-full xl:pt-[58.15px] xl:px-[50.74px] sm:px-[3.5vw] px-[9.7vw] xl:pb-[84px] lg:pb-[5.8vw] pb-[19.2vw] lg:pt-[4.1vw] pt-[13.56vw] flex lg:flex-row lg:justify-between lg:items-start flex-col justify-start items-center"
      >
        <div
          v-for="(card, index) in cards"
          :key="card.title"
          :class="[
            'xl:w-[278.51px] lg:w-[30%] w-auto flex justify-between items-start',
            { 'lg:mt-0 mt-[13.5vw]': index > 0 },
          ]"
        >
          <h3 class="card-title font-bold text-4xl relative">
            <span>{{ card.title }}</span>
            <div
              class="absolute z-10 right-[-1rem] bottom-[-12px] w-[25px] h-[25px] opacity-60"
            >
              <div
                class="bg-[#AA6666] rounded-[50%] w-full h-full relative before:z-10 before:absolute before:w-[9px] before:h-[9px] before:top-[8px] before:left-[8px] before:bg-[#DCCCBC] before:rounded-[50%]"
              ></div>
            </div>
          </h3>
          <p
            class="tracking-normal xl:w-[199.66px] lg:ml-0 lg:w-[13.9vw] ml-[10.1vw] text-left"
          >
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
.card-title {
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-lr;
}
</style>
