<script setup lang="ts">
import screens from "../configs/tailwind/screens";
const breakpoint = useBreakpoints(screens);

const n = ref<number>();

const nSlides = computed(() => {
  if (breakpoint.isGreaterOrEqual("lg")) return (n.value = 3);
  else if (breakpoint.isSmaller("md")) return (n.value = 1);
  else return (n.value = 2);
});

// const { width: windowWidth } = useWindowSize();

// watch(windowWidth, (newVal, oldVal) => {
//   if (newVal !== oldVal) nSlides.value;
// });
</script>
<template>
  <div class="w-full bg-black">
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperPagination,
        SwiperNavigation,
      ]"
      :loop="true"
      :spaceBetween="16"
      :direction="'horizontal'"
      :slides-per-view="nSlides"
      :pagination="{
        clickable: false,
        type: 'bullets',
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide>
        <Card
          is-review
          title="UNO"
          text="Dolore
        officia ab impedit iste non illo itaque quos nesciunt modi adipisci,
        odit aperiam nemo, est tenetur reiciendis, maiores repellendus impedit
        iste non illo itaque quos nesciunt modi adipisci, odit aperiam nemo, est
        tenetur reiciendis, maiores repellendus Dolore officia ab impedit iste
        non illo itaque quos nesciunt modi adipisci, odit aperiam nemo, est
        tenetur reiciendis, maiores repellendus impedit iste non illo itaque
        quos nesciunt modi adipisci, odit aperiam nemo, est tenetur reiciendis,
        maiores repellendus."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          is-review
          title="DUE"
          text="Dolore officia ab
    impedit iste non illo itaque quos nesciunt modi adipisci, odit aperiam nemo,
    est tenetur reiciendis, maiores repellendus."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          is-review
          title="TRE"
          text="Dolore officia ab
    impedit iste non illo itaque quos nesciunt modi adipisci, odit aperiam nemo,
    est tenetur reiciendis, maiores repellendus."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          is-review
          title="QUATTRO"
          text="Dolore officia ab
    impedit iste non illo itaque quos nesciunt modi adipisci, odit aperiam nemo,
    est tenetur reiciendis, maiores repellendus."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          is-review
          title="CINQUE"
          text="Dolore officia ab
    impedit iste non illo itaque quos nesciunt modi adipisci, odit aperiam nemo,
    est tenetur reiciendis, maiores repellendus."
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          is-review
          title="SEI"
          text="Dolore officia ab
    impedit iste non illo itaque quos nesciunt modi adipisci, odit aperiam nemo,
    est tenetur reiciendis, maiores repellendus."
        />
      </SwiperSlide>
    </Swiper>
  </div>

  <!-- <Swiper
    :modules="[Mousewheel, Pagination]"
    :direction="'vertical'"
    :slidesPerView="1"
    :spaceBetween="30"
    :mousewheel="true"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper"
  >
    <SwiperSlide> Slide 1 </SwiperSlide>
    <SwiperSlide> Slide 2 </SwiperSlide>
    <SwiperSlide> Slide 3 </SwiperSlide>
  </Swiper> -->
</template>
<style scoped>
.swiper {
  width: 100%;
  height: auto;
  background: var(--website-bg-color);
  border: none;
}
.swiper-slide {
  font-size: 18px;
  color: #fff;
  padding-bottom: 2rem;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
