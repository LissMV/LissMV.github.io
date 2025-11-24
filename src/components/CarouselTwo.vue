<template>
  <div class="relative w-full">
    <div class="flex items-center justify-center gap-8">
      <button @click="prev" class="flex-shrink-0 cursor-pointer hover:scale-110 transition z-20"
        :disabled="currentIndex === 0" :class="{ 'opacity-50 cursor-not-allowed': currentIndex === 0 }">
        <IconCarouselOne />
      </button>

      <div class="overflow-hidden flex-1 max-w-4xl">
        <div class="flex transition-transform duration-500 "
          :style="{ transform: `translateX(-${currentIndex * 50}%)` }">
          <div v-for="(img, index) in images" :key="index" class="w-1/2 flex-shrink-0 ">
            <img :src="img" alt="" class="w-[383px] h-[219px]" />
          </div>
        </div>
      </div>

      <button @click="next" class="flex-shrink-0 cursor-pointer hover:scale-110 transition z-20"
        :disabled="currentIndex >= images.length - 2"
        :class="{ 'opacity-50 cursor-not-allowed': currentIndex >= images.length - 2 }">
        <IconCarouselTwo />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconCarouselOne from "./icons/IconCarouselOne.vue";
import IconCarouselTwo from "./icons/IconCarouselTwo.vue";

const props = defineProps({
  images: {
    type: Array,
    required: true
  }
});

const currentIndex = ref(0);

const next = () => {
  if (currentIndex.value < props.images.length - 2) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>
