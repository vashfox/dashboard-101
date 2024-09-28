<template>
  <div class="flex gap-5 md:gap-10 border-b-2 border-gray-200 pb-4 flex-col md:flex-row">
    <div class="flex w-full md:w-1/2">
      <div class="mr-1">
        <div
          class="flex items-center justify-center w-14 h-14 rounded-full bg-gray-300 text-gray-700 font-bold text-xl">
          <span>AB</span>
        </div>
      </div>
      <div class="flex flex-col">
        <span class="font-bold text-lg leading-5">
          {{ user.name }}
        </span>
        <span>
          {{ user.email }}
        </span>
        <span>
          {{ user.website }}
        </span>
      </div>
    </div>
    <div class="flex flex-col flex-grow-1">
      <span class="font-bold text-lg leading-5 capitalize">
        {{ post.title }}
      </span>
      <span>
        {{ post.body }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    default: () => { return {} },
  },
  user: {
    type: Object,
    default: () => { return {} },
  },
});

</script>