<template>
  <header class="flex bg-cyan-700 dark:bg-gray-700 p-4 shadow-lg">
    <div class="flex justify-between w-full">
      <div class="flex">
        <button class="p-1  text-white rounded-lg lg:hidden" @click="toggleSidePanel">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <h1 class="text-2xl text-white dark:text-inherit">Header</h1>
      </div>
      <div class="flex items-center">
        <span class="mr-1 capitalize text-white dark:text-inherit">
          {{ theme }}
        </span>
        <div class="flex items-center justify-center">
          <div class="flex items-center">
            <input type="checkbox" id="theme-toggle" class="hidden" v-model="isDarkMode" @change="toggleTheme" />
            <label for="theme-toggle"
              class="relative flex items-center w-12 h-6 bg-white rounded-full cursor-pointer dark:bg-gray-600">
              <span
                class="absolute w-4 h-4 bg-cyan-500 dark:bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out"
                :class="{ 'translate-x-6': isDarkMode, 'translate-x-1': !isDarkMode }"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits(['toggleSidePanel']);
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isDarkMode = ref('ref')

const theme = computed(() => store.getters['theme/theme']);

const toggleTheme = () => {
  store.commit('theme/setTheme', theme.value == 'light' ? "dark" : 'light')
}

const toggleSidePanel = () => {
  emit('toggleSidePanel');
};

onMounted(() => {
  isDarkMode.value = theme.value == 'dark'
});
</script>
