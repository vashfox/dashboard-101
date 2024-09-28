<template>
  <button type="button"
    class="w-fit justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
    :class="[ isDark ? 'bg-blue-500 dark:bg-gray-800 text-white hover:bg-opacity-80' : 'bg-white text-gray-800 hover:shadow-inner']">
    <slot></slot>
  </button>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isDark: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>