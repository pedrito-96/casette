<template>
  <TheHeader class="top-0 fixed z-10" />
  <div
    class="min-h-[calc(100vh_-_96px)] z-0 absolute top-0 bottom-0 right-0 left-0"
  >
    <slot />
  </div>
  <TheFooter class="mt-4 z-10" />
</template>
<style>
body::-webkit-scrollbar {
  display: none;
}
</style>
