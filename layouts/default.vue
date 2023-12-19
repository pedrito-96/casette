<template>
  <TheHeader class="top-0 fixed z-10" />
  <div class="min-h-[calc(100vh_-_96px)] z-0">
    <slot />
  </div>
  <TheFooter class="mt-4 z-10" />
</template>
<style>
body::-webkit-scrollbar {
  display: none;
}
</style>
