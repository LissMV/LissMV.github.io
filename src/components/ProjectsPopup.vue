<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const projects = [
  {
    id: 1,
    title: 'Thesis defense',
    subtitle: 'Walter A. Soundy',
    color: 'from-violeta to-aqua-claro',
    route: '/thesis'
  },
  {
    id: 2,
    title: 'EXPO TECH',
    subtitle: '¡Supérate!',
    color: 'from-violeta to-aqua-claro',
    route: '/expo-tech'
  },
  {
    id: 3,
    title: 'EXPO (Feria de logros)',
    subtitle: '¡Supérate! F. Poma',
    color: 'from-violeta to-aqua-claro',
    route: '/expo'
  },
  {
    id: 4,
    title: 'Hackathon',
    subtitle: '¡Supérate! F. Poma',
    color: 'from-violeta to-aqua-claro',
    route: '/hackathon'
  },
];

defineProps({ isOpen: Boolean });

const emit = defineEmits(['close']);
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-40" @click="emit('close')">
    <div
      class="absolute left-34 top-1/2 -translate-y-1/2 bg-gradient-to-b from-gris-claro/20 via-cyan/20 to-cyan/20 backdrop-blur-sm rounded-r-lg p-4 shadow-xl"
      style="backdrop-filter: blur(10px);"
      @click.stop
    >
      <h3 class="text-gris-claro font-bold text-2 pb-3 font-afacad">Projects</h3>

      <div class="space-y-2 max-w-sm">
        <div
          v-for="project in projects"
          :key="project.id"
          :class="`w-62 bg-gradient-to-r ${project.color} rounded-lg p-4.5 cursor-pointer hover:shadow-lg transition-all duration-200`"
          @click="router.push(project.route)"
        >
          <h4 class="text-gris-claro font-sundori text-[17px]">{{ project.title }}</h4>
          <p v-if="project.subtitle" class="text-gris-claro font-abhaya text-[17px]">
            {{ project.subtitle }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
