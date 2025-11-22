<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import IconAboutMe from './icons/navbar/IconAboutMe.vue';
import IconCourses from './icons/navbar/IconCourses.vue';
import IconHome from './icons/navbar/IconHome.vue';
import IconProjects from './icons/navbar/IconProjects.vue';
import IconVolunteer from './icons/navbar/IconVolunteer.vue';
import ProjectsPopup from './ProjectsPopup.vue';

const router = useRouter();
const route = useRoute();
const activeIcon = ref('home');
const showProjectsPopup = ref(false);

const navItems = [
  { id: 'home', icon: IconHome, route: '/' },
  { id: 'about', icon: IconAboutMe, route: '/about' },
  { id: 'volunteer', icon: IconVolunteer, route: '/volunteer' },
  { id: 'courses', icon: IconCourses, route: '/courses' },
  { id: 'projects', icon: IconProjects, route: '/projects' },
];

const handleClick = (id: string, route: string) => {
  activeIcon.value = id;

  if (id === 'projects') {
    showProjectsPopup.value = !showProjectsPopup.value;
  } else {
    showProjectsPopup.value = false;
    router.push(route);
  }
};

const handleDownloadResume = () => {
  console.log('Descargar CV');
};

const getIconColor = (id: string) => {
  return activeIcon.value === id ? '#FFFFFF' : '#CDCACA';
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="backdrop-blur-sm fixed top-1/2 left-16 -translate-y-1/2 w-[70px] bg-gradient-to-b from-gris-claro/20 via-cyan/20 to-cyan/20 rounded-lg shadow-lg flex flex-col items-center py-3 gap-10 z-50" style="backdrop-filter: blur(10px);">
      <button
        v-for="item in navItems"
        :key="item.id"
        @click="handleClick(item.id, item.route)"
        :class="[
          'relative p-1.5 rounded-md flex items-center justify-center transition-all duration-200',
          activeIcon === item.id
            ? 'bg-turquesa shadow-lg'
            : 'bg-transparent hover:bg-turquesa hover:shadow-lg'
        ]"
        :style="activeIcon === item.id ? 'box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2)' : 'box-shadow: none'"
      >
        <component
          :is="item.icon"
          :fill="getIconColor(item.id)"
          class="transition-all duration-200"
        />
      </button>
    </nav>

    <ProjectsPopup
      :isOpen="showProjectsPopup"
      @close="showProjectsPopup = false"
    />
  </div>
</template>
