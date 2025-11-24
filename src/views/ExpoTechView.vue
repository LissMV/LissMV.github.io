<template>
  <div class="flex justify-center mt-[82px] ml-20">
    <h1
      class="font-harys text-[65px] font-bold bg-gradient-to-b from-aqua-claro to-violeta to-[100%] bg-clip-text text-transparent leading-tight">
      EXPO TECH 2025</h1>
  </div>
  <div class="flex justify-center mt-[26px] ml-20">
    <img src="@/assets/img/expo-tech/introduction.png" class="w-[600px] h-[296px]">
  </div>
  <div class="mt-10 pl-[310px] pr-[200px]">
    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-10 text-justify">
      Expo Tech is a competition involving all ¡Supérate! centers to follow up on the projects presented during "Feria
      de logros EXPO" held in the second year of the scholarship. <br />
      Before the Expo Tech event, third-year students prepare to improve their projects and work primarily on the
      business model to make it sustainable. Each center selects a project to present in a shark tank and a winner is
      chosen. <br />
      For me, EXPO TECH has been the most challenging and educational project. I was able to work in two proyects, where
      I improved my programming skills and, above all, learned what a business model is and what a business needs to be
      sustainable.</h1>
    <h1 class="text-turquesa text-[65px] font-harys mt-8">Ecommunity</h1>
    <h1 class="font-afacad text-white text-[23px] leading-[31px] text-justify mt-4">
      My team and I worked on improving Ecommunity, the same project we presented at Feria de logros EXPO 2024. We
      changed
      the color palette and improved the website design, and we also created a business model canvas. </h1>
  </div>
  <div class="flex justify-center mt-7 pl-[107px]">
    <img src="@/assets/img/expo-tech/business-model.png" class="w-[1003px] h-[565px]">
  </div>
  <div class="mt-10 pl-[310px] pr-[200px]">
    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-10 text-justify">
      Changing the color of the website design was one of the most enjoyable aspects. In 2024, I worked primarily on the
      database
      and functionalities, but in this part of improving the design, I could work more on the frontend with Tailwind
      CSS.</h1>
  </div>
  <h1 class="pl-[275px] mt-8 text-[50px] font-abhaya text-white">New color palete</h1>
  <section class="flex justify-center space-x-5 ml-30 mt-5">
    <div class="flex items-center flex-col">
      <div class="w-[150px] h-[150px] bg-[#162A2C] rounded-full mb-3" />
      <h1 class="font-afacad text-[23px] text-white">#162A2C</h1>
    </div>
    <div class="flex items-center flex-col">
      <div class="w-[150px] h-[150px] bg-[#2B4F37] rounded-full mb-3" />
      <h1 class="font-afacad text-[23px] text-white">#2B4F37</h1>
    </div>
    <div class="flex items-center flex-col">
      <div class="w-[150px] h-[150px] bg-[#4A583D] rounded-full mb-3" />
      <h1 class="font-afacad text-[23px] text-white">#4A583D</h1>
    </div>
    <div class="flex items-center flex-col">
      <div class="w-[150px] h-[150px] bg-[#8BB174] rounded-full mb-3" />
      <h1 class="font-afacad text-[23px] text-white">#8BB174</h1>
    </div>
    <div class="flex items-center flex-col">
      <div class="w-[150px] h-[150px] bg-[#D6E0E2] rounded-full mb-3" />
      <h1 class="font-afacad text-[23px] text-white">#D6E0E2</h1>
    </div>
  </section>
  <h1 class="pl-[275px] mt-8 text-[50px] font-abhaya text-white">Presentation and payment plans included</h1>
  <div class="ml-[250px] mr-[160px] mt-14">
    <CarouselTwo :images="ecommunitImages" />
  </div>


  <section class="pl-[310px] pr-[200px] mt-12">
    <h1 class="text-cyan text-[65px] font-harys">TrackMate</h1>
    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-2 text-justify">
      TrackMate was the project chosen to represent Centro ¡Supérate! Fundación Poma at the Expo Tech Shark Tank, and
      I had the opportunity to participate and help with this project. It was really cool and a very exciting
      experience.</h1>
    <h1 class="text-white font-abhaya text-[30px] mt-6">What is TrackMate?</h1>
    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-2 text-justify">
      The project consists of facilitating the monitoring of vehicle maintenance, connecting users with trusted repair
      shops
      through an application (Progressive Web App).</h1>
    <img src="@/assets/img/expo-tech/branding1.png" class="w-[733px] h-[414px] mt-10">
    <div class="flex justify-end mt-10">
      <img src="@/assets/img/expo-tech/branding2.png" class="w-[505px] h-[285px]">
    </div>
    <h1 class="text-white font-abhaya text-[30px] mt-10">My role in this Proyect</h1>
    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-5 text-justify">
      In this project, I had the opportunity to participate as a backend developer, contributing to the development of
      the database,
      creating relationships between tables with Laravel, connecting migrations and seeders. Thanks to this, I was able
      to improve my
      development skills. In addition, the project won recognition for best code and use of technologies. </h1>
    <div class="flex justify-center items-end space-x-5 mt-5">
      <img src="@/assets/img/expo-tech/code-diploma.png" class="w-[307px] h-[224px]">
      <img src="@/assets/img/expo-tech/trackmate.png" class="w-[486px] h-[284px]">
    </div>
  </section>
  <img src="@/assets/img/expo-tech/trackmate-team.png" class="w-full mt-16"></img>

</template>

<script setup>
import CarouselTwo from '@/components/CarouselTwo.vue';

const ecommunitImages = [
  new URL('@/assets/img/expo-tech/ecommunity1.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity2.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity3.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity4.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity5.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity6.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity7.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity8.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity9.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity10.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity11.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity12.png', import.meta.url).href,
  new URL('@/assets/img/expo-tech/ecommunity13.png', import.meta.url).href,
];
</script>
