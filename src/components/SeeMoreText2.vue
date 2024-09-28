<template>
  <div class="see-more-text">
    <div 
      ref="textContainer"
      class="text-container"
      :class="{ expanded: isExpanded }"
    >
      {{ text }}
    </div>
    <span class="text-blue-500 cursor-pointer hover:underline" v-if="isOverflowing" @click="toggleExpand">
      {{ isExpanded ? 'See less' : 'See more' }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

// Define the props for the component
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const isOverflowing = ref(false);
const isExpanded = ref(false);
const textContainer = ref(null);

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

// Check if the text overflows
const checkOverflow = () => {
  const el = textContainer.value;
  if (el) {
    var maxHeight = 23 // height of the text(single line)   
    
    isOverflowing.value = maxHeight < el.clientHeight;
    el.style.maxHeight = isExpanded.value ? 'none' : `${maxHeight}px`; // Toggle max height
  }
};

onMounted(() => {
  checkOverflow();
});

// Watch the text prop for changes
watch(() => props.text, () => {
  checkOverflow();
});
</script>

<style scoped>
.see-more-text {
  margin: 1em 0;
}

.text-container {
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.text-container.expanded {
  max-height: none !important;/* Remove max-height to show full text */
}

button {
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  cursor: pointer;
  margin-top: 0.5em;
}

button:hover {
  background-color: #0056b3;
}
</style>
