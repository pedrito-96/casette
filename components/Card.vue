<script setup lang="ts">
import type { CardProps } from "./Card.props";

defineProps<CardProps>();

const dogAge = ref(0);

const humanAge = computed(() => {
  if (dogAge.value) {
    return dogAge.value * 7;
  }
});
</script>

<template>
  <div class="card w-full" :class="{ 'h-[180px]': isReview }">
    <div v-if="isReview" class="flex justify-between items-baseline mb-4">
      <div class="flex gap-2 items-baseline">
        <NuxtImg
          src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
          class="aspect-square h-8 w-8 rounded-full"
        />
        <h1>Nome Cognome</h1>
      </div>
      <span>★★★★★</span>
    </div>
    <h1 class="font-bold">{{ title }}</h1>
    <h2 class="mb-2">{{ subtitle }}</h2>
    <p class="mb-2" :class="{ 'overflow-y-scroll line-clamp-2': isReview }">
      {{ text }}
    </p>
    <!-- <div class="space-x-2">
      <label for="age">Your dog's age</label>
      <input
        class="text-black rounded-sm p-1"
        type="number"
        name="age"
        id="age"
        :max="99"
        :min="0"
        v-model="dogAge"
      />
    </div>
    <p>
      In human age: <span>{{ humanAge }}</span>
    </p> -->
  </div>
</template>

<style scoped lang="scss">
/* Glassmorphism card effect */
.card {
  backdrop-filter: blur(15px) saturate(100%);
  -webkit-backdrop-filter: blur(15px) saturate(100%);
  background-color: #034748;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 20px;
}
</style>
