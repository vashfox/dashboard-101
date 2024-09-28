<template>
  <!-- For large screens, show the side panel normally -->
  <aside class="min-w-64 bg-cyan-800 dark:bg-gray-800 p-4 h-screen lg:flex lg:w-64 flex-col hidden lg:block">
    <h2 class="text-xl font-bold mb-4 text-white dark:text-inherit">Side Panel</h2>
    <ul class="space-y-2">
      <li v-for="route in routes" :key="route.title" @click="goTo(route.path)"
        class="cursor-pointer hover:bg-gray-700 p-2 rounded text-white dark:text-inherit">{{ route.title }}</li>
    </ul>
  </aside>

  <!-- Mobile overlay panel -->
  <div v-if="isVisible" class="fixed inset-0 z-40 bg-cyan-800 dark:bg-gray-800 bg-opacity-50 lg:hidden" @click.self="closePanel">
    <aside class="w-64 h-full bg-cyan-800 dark:bg-gray-800 flex flex-col p-4">
      <button class="text-xl self-end" @click="closePanel">×</button>
      <h2 class="text-xl font-bold mb-4 text-white dark:text-inherit">Side Panel</h2>
      <ul class="space-y-2">
        <li v-for="route in routes" :key="route.title" @click="goTo(route.path)"
          class="cursor-pointer hover:bg-gray-700 p-2 rounded text-white dark:text-inherit">{{ route.title }}</li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue';
import { useRouter, useRoute } from "vue-router";
const router = useRouter();

const routes = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Profile',
    path: '/profile',
  }
]

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['close']);

const closePanel = () => {
  emit('close');
};

const goTo = (path) => {
  router.push(path)
}
</script>
