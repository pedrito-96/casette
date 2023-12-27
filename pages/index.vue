<template>
  <div class="space-y-4">
    <HeroSwiper class="" />
    <!-- <Disclosure
      title="Lorem ipsum dolor sit amet"
      text="Dolore officia ab impedit iste non illo itaque quos nesciunt modi adipisci, odit aperiam nemo, est tenetur reiciendis, maiores repellendus."
    /> -->

    {{ $t("test") }}
    <div class="flex flex-col gap-4 px-4">
      <Card
        :title="$t('aboutUs')"
        subtitle="damn bro"
        text="Dolore officia ab
  impedit iste non illo itaque quos nesciunt modi adipisci, odit aperiam nemo,
  est tenetur reiciendis, maiores repellendus."
      />
      <ReviewSwiper />
      <Card title="Is your dog older than you?" />
      <div class="w-full @apply bg-[#D1BEB0] h-[50dvh]"></div>
      <Card title="Is your dog older than you?" />
    </div>
  </div>
</template>
