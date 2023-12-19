<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const { currentLocale } = useLocale();
</script>
<template>
  <header class="flex justify-between w-full text-black p-3">
    <div class="flex gap-x-4">
      <nuxt-link
        :to="`/${currentLocale}`"
        class="rounded-full bg-slate-100/50 hover:bg-black hover:text-green-400 py-1 px-4"
      >
        LOGO
      </nuxt-link>

      <nuxt-link
        :to="`/${currentLocale}`"
        class="rounded-full bg-slate-100/50 hover:bg-black hover:text-green-400 py-1 px-4"
      >
        {{ $t("contactUs") }}
      </nuxt-link>
    </div>
    <div class="flex gap-x-4 text-slate-100">
      <!-- <form>
        <label for="locale-select">{{ $t("test") }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option value="en">en</option>
          <option value="it">it</option>
        </select>
      </form> -->

      <NuxtLink :to="switchLocalePath('it')">IT</NuxtLink>
      <NuxtLink :to="switchLocalePath('en')">EN</NuxtLink>
    </div>
  </header>
</template>
