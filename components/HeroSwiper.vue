<script setup lang="ts"></script>
<template>
  <div class="w-full h-[70dvh] bg-black">
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperPagination,
        SwiperMousewheel,
        SwiperNavigation,
      ]"
      :loop="true"
      :navigation="true"
      :direction="'horizontal'"
      :preventInteractionOnTransition="true"
      :slides-per-view="1"
      :pagination="{
        clickable: true,
        type: 'progressbar',
      }"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
      }"
      :effect="'creative'"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide>
        <NuxtImg src="../public/casetta.jpg" class="aspect-video" placeholder />
      </SwiperSlide>
      <SwiperSlide>
        <NuxtImg
          src="https://picsum.photos/200/300?grayscale"
          class="aspect-video"
          placeholder
        />
      </SwiperSlide>
      <SwiperSlide>
        <NuxtImg
          src="https://picsum.photos/200/300?grayscale"
          class="aspect-video"
          placeholder
        />
      </SwiperSlide>
      <SwiperSlide>
        <NuxtImg
          src="https://picsum.photos/200/300?grayscale"
          class="aspect-video"
          placeholder
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
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}

.swiper-slide img {
  transform-origin: center;
  animation: zoomin 57s 1;
  -webkit-animation: zoomin 57s 1;
}
@keyframes zoomin {
  0% {
    -webkit-transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.8);
  }
}
</style>
