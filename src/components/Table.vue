<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th v-for="header, i in headers" :key="i" class="border-b font-medium p-4 pl-8 pt-0 pb-3 text-left">
          {{ header.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item, i in data" :key="i">
        <slot :name="header.value" v-for="header, j in headers" :key="j" :item="item">
          <td class="border-b p-4 pl-8">
            {{ item[header.value] }}
          </td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  headers: {
    type: Array,
    default: () => { return [] },
  },
  data: {
    type: Array,
    default: () => { return [] },
  },
});

</script>

<style lang="scss" scoped></style>