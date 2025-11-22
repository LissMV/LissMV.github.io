<template>
  <div class="w-full flex items-center justify-center gap-6">

    <button
      @click="prev"
      class="cursor-pointer hover:scale-110 transition"
    >
      <IconCarouselOne />
    </button>

    <div class="overflow-hidden w-[800px]">
      <div
        class="flex transition-transform duration-500"
        :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }"
      >
        <div
          v-for="(img, index) in images"
          :key="index"
          class="w-1/3 flex-shrink-0 flex justify-center"
        >
          <img
            :src="img"
            alt=""
            class="w-[246px] h-[230px] object-cover"
          />
        </div>
      </div>
    </div>

    <button
      @click="next"
      class="cursor-pointer hover:scale-110 transition"
    >
      <IconCarouselTwo />
    </button>

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
  if (currentIndex.value < props.images.length - 3) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

