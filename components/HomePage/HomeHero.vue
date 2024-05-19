<template>
  <div class="wrap">
    <div class="anchor" id="hero"></div>
    <div class="swiper" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/img/hero-1.jpg" alt="" />
          <div class="container">
            <h2 class="title">
              <span v-if="$route.params.lang == 'ru'">Свежие экзотические фрукты и овощи со всего мира!</span>
              <span v-if="$route.params.lang == 'uz'">Butun dunyodan barra ekzotik meva va sabzavotlar!</span>
              <span v-if="$route.params.lang == 'en'">Fresh exotic fruits and vegetables from all over the world!</span>
            </h2>
            <button @click="scrollElement('contacts')">
              <span v-if="$route.params.lang == 'ru'">Контакты</span>
              <span v-if="$route.params.lang == 'uz'">Bog'lanish</span>
              <span v-if="$route.params.lang == 'en'">Contacts</span>
            </button>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/hero-2.jpg" alt="" />
          <div class="container">
            <h2 class="title">
              <span v-if="$route.params.lang == 'ru'">Лучшие фрукты и овощи из Узбекистана к вашему столу</span>
              <span v-if="$route.params.lang == 'uz'">O'zbekistondan dasturxoningizga eng yaxshi meva va
                sabzavotlar</span>
              <span v-if="$route.params.lang == 'en'">The best fruits and vegetables from Uzbekistan for your
                table</span>
            </h2>
            <button @click="scrollElement('contacts')">
              <span v-if="$route.params.lang == 'ru'">Контакты</span>
              <span v-if="$route.params.lang == 'uz'">Bog'lanish</span>
              <span v-if="$route.params.lang == 'en'">Contacts</span>
            </button>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/hero-3.jpg" alt="" />
          <div class="container">
            <h2 class="title">
              <span v-if="$route.params.lang == 'ru'">Свежие фрукты и овощи прямо к вашему порогу</span>
              <span v-if="$route.params.lang == 'uz'">Barra meva va sabzavotlar sizning ostonangizga to'g'ri
                keladi</span>
              <span v-if="$route.params.lang == 'en'">Fresh fruits and vegetables right at your doorstep</span>
            </h2>
            <button @click="scrollElement('contacts')">
              <span v-if="$route.params.lang == 'ru'">Контакты</span>
              <span v-if="$route.params.lang == 'uz'">Bog'lanish</span>
              <span v-if="$route.params.lang == 'en'">Contacts</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  mounted() {
    new Swiper(this.$refs.swiper, {
      slidesPerView: 1,
      speed: 1500,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  },

  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.wrap {
  position: relative;
}

.swiper {
  height: 100vh;
}

.swiper-slide {
  position: relative;
  height: 100%;
}

.swiper-slide::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
}

.swiper-slide img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.swiper-slide .container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: flex-start;
  justify-content: center;
}

.title {
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 67.2px */
  margin-bottom: 24px;
  max-width: 70%;
}

button {
  padding: 12px 48px;
  border-radius: 8px;
  background: var(--green);
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: 30px;
    max-width: 90%;
  }
}
</style>
