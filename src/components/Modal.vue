<template>
  <div v-if="show" class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div
          class="relative transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl">
          <div class="bg-white dark:bg-gray-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <h3 class="text-base font-semibold leading-6 text-gray-900 pb-4" id="modal-title">
              <slot name="title"></slot>
            </h3>
            <button @click="closeModal" class="absolute h-6 w-6 z-10 right-1 top-1 font-semibold" type="button">
              X
            </button>
            <slot></slot>
          </div>
          <div class="bg-gray-50 dark:bg-gray-800 px-4 py-3 flex justify-end">
            <slot name="actions">
              <Button class="mx-1" isDark @click="closeModal">Close</Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import Button from './Button.vue';

const show = defineModel();

const closeModal = () => {
  show.value = false;
}
</script>