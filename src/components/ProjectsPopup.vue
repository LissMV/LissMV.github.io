<script setup lang="ts">
import { ref } from 'vue';

const projects = [
  {
    id: 1,
    title: 'Thesis defense',
    subtitle: 'Walter A. Soundy',
    color: 'from-violeta to-aqua-claro'
  },
  {
    id: 2,
    title: 'EXPO TECH',
    subtitle: '¡Supérate!',
    color: 'from-violeta to-aqua-claro'
  },
  {
    id: 3,
    title: 'EXPO (Feria de logros)',
    subtitle: '¡Supérate! F. Poma',
    color: 'from-violeta to-aqua-claro'
  },
  {
    id: 4,
    title: 'Hackathon',
    subtitle: '¡Supérate! F. Poma',
    color: 'from-violeta to-aqua-claro'
  },
];

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-40" @click="emit('close')">
    <div
      class="absolute left-34 top-1/2 -translate-y-1/2  bg-gradient-to-b from-gris-claro/20 via-cyan/20 to-cyan/20 backdrop-blur-sm rounded-r-lg p-4 shadow-xl "style="backdrop-filter: blur(10px);"
      @click.stop
    >
      <h3 class="text-gris-claro font-bold text-2 pb-6 font-afacad">Projects</h3>

      <div class="space-y-3 max-w-sm">
        <div
          v-for="project in projects"
          :key="project.id"
          :class="`w-62 bg-gradient-to-r ${project.color} rounded-lg p-4.5 cursor-pointer hover:shadow-lg transition-all duration-200`"
        >
          <h4 class="text-gris-claro font-sundori">{{ project.title }}</h4>
          <p v-if="project.subtitle" class="text-gris-claro font-abhaya text-sm">{{ project.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
