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
<style>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  color: #000;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.swiper-pagination {
  @apply bg-red-400 bottom-0;
}

.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
  @apply bg-slate-500;
}

.swiper-horizontal > .swiper-pagination-progressbar,
.swiper-pagination-progressbar.swiper-pagination-horizontal,
.swiper-vertical
  > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,
.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite {
  top: initial;
  bottom: 0;
}

div.swiper-button-prev,
div.swiper-button-next {
  @apply text-blue-100 hidden md:block;
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
