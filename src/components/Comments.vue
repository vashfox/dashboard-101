<template>
  <div>
    <span>
      Comments ({{ comments.length }})
    </span>
    <div class="flex flex-col my-4" v-for="comment in comments" :key="comment.id">
      <div class="flex items-center">
        <div class="mr-2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-gray-700 font-bold">
          <span>AB</span>
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-bold">{{ comment.name }}</span>
          <span class="text-sm text-slate-500">{{ comment.email }}</span>
        </div>
      </div>
      <span class="mt-2">
        {{ comment.body }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  comments: {
    type: Array,
    default: () => { return [] },
  },
});
</script>

<style lang="scss" scoped></style>