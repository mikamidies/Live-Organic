<template>
  <div class="wrap">
    <div class="swiper" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/img/hero-1.jpg" alt="" />
          <div class="container">
            <h2 class="title">
              Authentic Organic Fruits &amp; Vegetables<br />
              Farm to your doorstep
            </h2>
            <button>Contact Us!</button>
          </div>
        </div>
        <div class="swiper-slide">
          <img src="@/assets/img/hero-2.jpg" alt="" />
          <div class="container">
            <h2 class="title">
              Organic Certified Strawberries <br />
              From Mahabaleshwar!
            </h2>
            <button>Contact Us!</button>
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
      // autoplay: {
      //   delay: 2000,
      // },
    });
  },
};
</script>

<style scoped>
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
  line-height: 120%; /* 67.2px */
  margin-bottom: 24px;
}
button {
  padding: 12px 48px;
  border-radius: 8px;
  background: var(--green);
  color: white;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
}
@media screen and (max-width: 1024px) {
  .title {
    font-size: 30px;
  }
}
</style>
