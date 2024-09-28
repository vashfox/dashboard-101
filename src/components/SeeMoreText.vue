<template>
  <div class="see-more-text">
    <div 
      ref="textContainer"
      class="text-container"
      :class="{ expanded: isExpanded }"
    >
      {{ text }}
    </div>
    <button v-if="isOverflowing" @click="toggleExpand">
      {{ isExpanded ? 'See less' : 'See more' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

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

// Check if the text overflows two lines
const checkOverflow = () => {
  
  const el = textContainer.value;
  console.dir(el);
  if (el) {
    // Save the original height and set max-height to 2 lines for comparison
    const originalHeight = el.scrollHeight;
    console.log({originalHeight});
    el.style.maxHeight = "15px"; // Adjust this value based on your line height and font size
    el.style.overflow = "auto"; // Adjust this value based on your line height and font size
    console.log({elscrollHeight: el.scrollHeight,originalHeight});
    isOverflowing.value = el.scrollHeight > originalHeight;
    // el.style.maxHeight = ""; // Reset max-height
  }
};

onMounted(() => {
  checkOverflow();
});
</script>

<style scoped>
.see-more-text {
  margin: 1em 0;
}

.text-container {
  /* overflow: hidden; */
  max-height: 15px; /* Adjust this value based on your line height and font size */
  transition: max-height 0.3s ease;
}

.text-container.expanded {
  max-height: none; /* Remove max-height to show full text */
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
