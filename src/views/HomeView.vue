<template>
  <div class="ml-[345px] mt-[82px]">
    <h1
      class="font-harys text-[65px] font-bold bg-gradient-to-b from-aqua-claro from-[35%] to-violeta bg-clip-text text-transparent leading-tight">
      Hi,<br />
      I'm Lisseth
    </h1>

    <button @click="handleDownloadResume"
      class="absolute top-26 right-42 bg-turquesa text-white px-6 py-2 rounded-full font-harys flex items-center gap-2 hover:bg-cyan transition-all duration-200 shadow-lg">
      My resume
      <IconDownload class="w-8 h-8" />
    </button>

    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-10 font-black">
      A creative and resilient person with strong computer skills, especially in web <br /> development.
    </h1>
    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-6 font-black">
      I am a student motivated by finding ways to improve my skills and willing to work <br />
      hard to achieve my goals and always learn something new to continue my <br /> education and improve my knowledge.
    </h1>

    <div class="flex space-x-4 mt-10 items-center">
      <h1 class="font-afacad text-white text-[22px] leading-[31px]">Get in touch →</h1>
      <a href="mailto:valencialisseth47@gmail.com">
        <IconEmail />
      </a>
      <a href="https://github.com/LissMV" target="_blank" rel="noopener noreferrer">
        <IconGitHub />
      </a>
      <a href="https://www.linkedin.com/in/mejialisseth" target="_blank" rel="noopener noreferrer">
        <IconIn />
      </a>
    </div>
  </div>

 <img src="" alt="">

  <div class="ml-[310px] mt-[82px] mr-[200px]">
    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-10 text-justify">
      I am a student motivated by finding ways to improve my skills and willing to work hard to achieve my goals and
      always learn something new to
      continue my education and improve my knowledge. I am a dreamer. I like to create, innovate, and participate in
      activities such as extracurricular
      activities and volunteering that allow me to develop as a leader and future professional.</h1>

    <h1 class="font-afacad text-white text-[23px] leading-[31px] mt-10 text-justify">
      To tell you a little about my education, I completed grades one through nine at Centro Escolar "José María
      Cáceres". I spent nine years there learning
      many things and having incredible experiences. I have always enjoyed participating in grade-level leadership
      roles, so I was president more than once,
      and that has helped me develop my leadership skills. I am currently finishing my high school education at Complejo
      Educativo "Walter A. Soundy" in Santa
      Tecla, where I have had the opportunity to be president of the student government.</h1>
  </div>
</template>

<script setup lang="ts">
import IconDownload from '@/components/icons/IconDownload.vue';
import IconEmail from '@/components/icons/IconEmail.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconIn from '@/components/icons/IconIn.vue';



const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf';
  link.download = 'Lisseth-Mejia-CV.pdf';
  link.click();
};
</script>
