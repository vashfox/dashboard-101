<template>
  <div class="flex min-h-screen w-full">
    <!-- SidePanel -->
    <SidePanel :isVisible="isSidePanelVisible" @close="closeSidePanel" />

    <!-- Main Content Area -->
    <div class="flex flex-col flex-1">
      <!-- Header -->
      <HeaderComp @toggleSidePanel="toggleSidePanel" />

      <!-- Content Area -->
      <ContentArea />

      <!-- Footer -->
      <FooterComp />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useStore } from 'vuex';
import SidePanel from '@/components/SidePanel.vue';
import HeaderComp from '@/components/Header.vue';
import FooterComp from '@/components/Footer.vue';
import ContentArea from '@/components/ContentArea.vue';

const store = useStore();
const theme = computed(() => store.getters['theme/theme']);

const isSidePanelVisible = ref(false);

const toggleSidePanel = () => {
  isSidePanelVisible.value = !isSidePanelVisible.value;
};

const closeSidePanel = () => {
  isSidePanelVisible.value = false;
};


watch(theme, async (value) => {
  if (value == 'dark') {
    document.body.classList.add('dark'); // Add class if active
  } else {
    document.body.classList.remove('dark'); // Remove class if not active
  }
})
</script>

<style>
.dark {
  --color-background: var(--vt-c-black) !important;
  --color-background-soft: var(--vt-c-black-soft) !important;
  --color-background-mute: var(--vt-c-black-mute) !important;

  --color-border: var(--vt-c-divider-dark-2) !important;
  --color-border-hover: var(--vt-c-divider-dark-1) !important;

  --color-heading: var(--vt-c-text-dark-1) !important;
  --color-text: var(--vt-c-text-dark-2) !important;
}
</style>
