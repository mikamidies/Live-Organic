<template>
  <div class="wrap">
    <div class="anchor" id="products"></div>
    <div class="container">
      <h2 class="title section__title" v-if="$route.params.lang == 'en'">Products</h2>
      <h2 class="title section__title" v-if="$route.params.lang == 'ru'">Продукция</h2>
      <h2 class="title section__title" v-if="$route.params.lang == 'uz'">Mahsulotlarimiz</h2>


      <div class="section" data-aos="fade-up" data-aos-duration="500">
        <h4 class="par">
          <span v-if="$route.params.lang == 'ru'">Фрукты</span>
          <span v-if="$route.params.lang == 'uz'">Mevalar</span>
          <span v-if="$route.params.lang == 'en'">Fruits</span>
        </h4>
        <div class="swiper" ref="fruitsSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="fruit in fruits" :key="fruit.img">
              <div class="item">
                <div class="img">
                  <img :src="fruit.img" alt="">
                </div>
                <h4 class="name">
                  <span v-if="$route.params.lang == 'ru'">{{ fruit.name_ru }}</span>
                  <span v-if="$route.params.lang == 'uz'">{{ fruit.name_uz }}</span>
                  <span v-if="$route.params.lang == 'en'">{{ fruit.name_en }}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" data-aos="fade-up" data-aos-duration="1000">
        <h4 class="par">
          <span v-if="$route.params.lang == 'ru'">Ягоды</span>
          <span v-if="$route.params.lang == 'uz'">Rezavorlar</span>
          <span v-if="$route.params.lang == 'en'">Berries</span>
        </h4>
        <div class="swiper" ref="berriesSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="berry in berries" :key="berry.img">
              <div class="item">
                <div class="img">
                  <img :src="berry.img" alt="">
                </div>
                <h4 class="name">
                  <span v-if="$route.params.lang == 'ru'">{{ berry.name_ru }}</span>
                  <span v-if="$route.params.lang == 'uz'">{{ berry.name_uz }}</span>
                  <span v-if="$route.params.lang == 'en'">{{ berry.name_en }}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section" data-aos="fade-up" data-aos-duration="1500">
        <h4 class="par">
          <span v-if="$route.params.lang == 'ru'">Овощи</span>
          <span v-if="$route.params.lang == 'uz'">Sabzavotlar</span>
          <span v-if="$route.params.lang == 'en'">Vegetables</span>
        </h4>
        <div class="swiper" ref="vegasSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="vega in vegas" :key="vega.img">
              <div class="item">
                <div class="img">
                  <img :src="vega.img" alt="">
                </div>
                <h4 class="name">
                  <span v-if="$route.params.lang == 'ru'">{{ vega.name_ru }}</span>
                  <span v-if="$route.params.lang == 'uz'">{{ vega.name_uz }}</span>
                  <span v-if="$route.params.lang == 'en'">{{ vega.name_en }}</span>
                </h4>
              </div>
            </div>
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
  data() {
    return {
      fruits: [
        {
          name_en: "Pineapple",
          name_ru: "Ананас",
          name_uz: "Ananas",
          img: "/products/fruits/1.png",
        },
        {
          name_en: "Pineapple Gold",
          name_ru: "Ананас Голд",
          name_uz: "Ananas Gold",
          img: "/products/fruits/2.png",
        },
        {
          name_en: "Orange",
          name_ru: "Апельсин",
          name_uz: "Apelsin",
          img: "/products/fruits/3.png",
        },
        {
          name_en: "Tangerine",
          name_ru: "Мандарин",
          name_uz: "Mandarin",
          img: "/products/fruits/4.png",
        },
        {
          name_en: "Grapefruit",
          name_ru: "Грейпфрут",
          name_uz: "Greypfrut",
          img: "/products/fruits/5.png",
        },
        {
          name_en: "Kiwi",
          name_ru: "Киви",
          name_uz: "Kivi",
          img: "/products/fruits/6.png",
        },
        {
          name_en: "Mango",
          name_ru: "Манго",
          name_uz: "Mango",
          img: "/products/fruits/7.png",
        },
        {
          name_en: "Dragonfruit",
          name_ru: "Драгонфрут",
          name_uz: "Dragonfrut",
          img: "/products/fruits/8.png",
        },
        {
          name_en: "Lemon",
          name_ru: "Лимон",
          name_uz: "Limon",
          img: "/products/fruits/9.png",
        },
        {
          name_en: "Lime",
          name_ru: "Лайм",
          name_uz: "Laym",
          img: "/products/fruits/10.png",
        },
        {
          name_en: "Mangosten",
          name_ru: "Мангостен",
          name_uz: "Mangosten",
          img: "/products/fruits/11.png",
        },
        {
          name_en: "Marakuya",
          name_ru: "Маракуя",
          name_uz: "Marakuya",
          img: "/products/fruits/12.png",
        },
        {
          name_en: "Avocado Fuerte",
          name_ru: "Авокадо Фуэрте",
          name_uz: "Avocado Fuerte",
          img: "/products/fruits/13.png",
        },
        {
          name_en: "Avocado Hass",
          name_ru: "Авокадо Хасс",
          name_uz: "Avocado Hass",
          img: "/products/fruits/14.png",
        },
        {
          name_en: "Coconut",
          name_ru: "Кокос",
          name_uz: "Kokos",
          img: "/products/fruits/15.png",
        },
        {
          name_en: "Rambutan",
          name_ru: "Рамбутан",
          name_uz: "Rambutan",
          img: "/products/fruits/16.png",
        },
        {
          name_en: "Starfruit",
          name_ru: "Карамбола",
          name_uz: "Karambola",
          img: "/products/fruits/17.png",
        },
        {
          name_en: "Lichi",
          name_ru: "Личи",
          name_uz: "Lichi",
          img: "/products/fruits/18.png",
        },
        {
          name_en: "Apple",
          name_ru: "Яблоко",
          name_uz: "Olma",
          img: "/products/fruits/19.png",
        },
        {
          name_en: "Pear",
          name_ru: "Груша",
          name_uz: "Nok",
          img: "/products/fruits/20.png",
        },
        {
          name_en: "Cherry",
          name_ru: "Черешня",
          name_uz: "Gilos",
          img: "/products/fruits/21.png",
        },
        {
          name_en: "Pomegranate",
          name_ru: "Гранат",
          name_uz: "Anor",
          img: "/products/fruits/22.png",
        },
      ],
      berries: [
        {
          name_en: "Strawberry",
          name_ru: "Клубника",
          name_uz: "Qulupnay",
          img: "/products/berries/1.png",
        },
        {
          name_en: "Raspberry",
          name_ru: "Малина",
          name_uz: "Malina",
          img: "/products/berries/2.png",
        },
        {
          name_en: "Blueberry",
          name_ru: "Голубика",
          name_uz: "Golubika",
          img: "/products/berries/3.png",
        },
        {
          name_en: "Blackberry",
          name_ru: "Ежевика",
          name_uz: "Yejevika",
          img: "/products/berries/4.png",
        },
        {
          name_en: "Physalis",
          name_ru: "Физалис",
          name_uz: "Fizalis",
          img: "/products/berries/5.png",
        },
      ],
      vegas: [
        {
          name_en: "Tomato",
          name_ru: "Помидор",
          name_uz: "Pomidor",
          img: "/products/vegetables/1.png",
        },
        {
          name_en: "Tomato Cherry",
          name_ru: "Помидоры Черри",
          name_uz: "Cherri Pomidorlari",
          img: "/products/vegetables/2.png",
        },
        {
          name_en: "Cucumber",
          name_ru: "Огуцы",
          name_uz: "Bodring",
          img: "/products/vegetables/3.png",
        },
        {
          name_en: "Pepper",
          name_ru: "Болгарский перец",
          name_uz: "Bulg'or qalampiri",
          img: "/products/vegetables/4.png",
        },
        {
          name_en: "Eggplant",
          name_ru: "Баклажан",
          name_uz: "Baqlajon",
          img: "/products/vegetables/5.png",
        },
      ],
    }
  },

  mounted() {
    new Swiper(this.$refs.fruitsSwiper, {
      slidesPerView: 1.5,
      spaceBetween: 8,
      speed: 1500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
        }
      }
    });

    new Swiper(this.$refs.berriesSwiper, {
      slidesPerView: 1.5,
      spaceBetween: 8,
      speed: 1500,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
        }
      }
    });

    new Swiper(this.$refs.vegasSwiper, {
      slidesPerView: 1.5,
      spaceBetween: 8,
      speed: 1500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
          spaceBetween: 16,
        }
      }
    });
  },
};
</script>

<style scoped>
.wrap {
  padding: 80px 0;
}

.wrap {
  position: relative;
}

.items {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.item {
  border: 1px solid hsl(0, 0%, 92%);
  position: relative;
  border-radius: 12px;
  border-bottom: 4px solid var(--green);
}

.badge {
  position: absolute;
  top: 0;
  left: 0;
  background: red;
  color: white;
  padding: 4px 8px;
  display: none;
}

.img img {
  width: 100%;
  height: 280px;
  object-fit: contain;
  display: flex;
  transition: .4s;
}

.img {
  overflow: hidden;
  padding: 16px;
}

.item:hover .img img {
  transform: scale(1.1);
}

.content {
  padding: 24px;
}

.name {
  font-size: 24px;
  color: var(--dark);
  font-family: var(--decor-sm);
  padding: 0 16px 16px 16px;
}

.price {
  font-size: 16px;
  line-height: 150%;
  color: var(--green);
  display: none;
}

.section {
  margin-bottom: 40px;
}

.par {
  font-size: 32px;
  font-family: var(--decor-sm);
  margin-bottom: 24px;
}

@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0;
    overflow: hidden;
  }

  .title {
    margin-bottom: 24px;
  }

  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .img img {
    height: 240px;
  }

  .badge {
    font-size: 12px;
  }

  .content {
    padding: 8px;
  }

  .item {
    border-radius: 8px;
  }

  .name {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .price {
    font-size: 14px;
  }

  .par {
    font-size: 24px;
    margin-bottom: 12px;
    text-align: center;
  }

  .swiper {
    margin-inline: -16px;
    padding-inline: 16px;
  }
}
</style>
