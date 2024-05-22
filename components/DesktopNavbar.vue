<template>
  <div class="wrap" id="navbar">
    <div class="top">
      <div class="container">
        <div class="left">
          <NuxtLink to="/">
            <img src="@/assets/img/logo/logo.png" alt="" />
          </NuxtLink>
        </div>

        <div class="burger" @click="menuHandle = !menuHandle" :class="{ x: menuHandle }">
          <div class="stick"></div>
        </div>

        <div class="right">
          <div class="item">
            <a href="tel:+998900160606">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path opacity="0.4"
                  d="M18 16V14.3541C18 13.5363 17.5021 12.8008 16.7428 12.4971L14.7086 11.6835C13.7429 11.2971 12.6422 11.7156 12.177 12.646L12 13C12 13 9.5 12.5 7.5 10.5C5.5 8.5 5 6 5 6L5.35402 5.82299C6.28438 5.35781 6.70285 4.25714 6.31654 3.29136L5.50289 1.25722C5.19916 0.497903 4.46374 0 3.64593 0H2C0.895431 0 0 0.89543 0 2C0 10.8366 7.16344 18 16 18C17.1046 18 18 17.1046 18 16Z"
                  fill="#28303F" />
              </svg>
              +998 90 016 0606
            </a>
          </div>
          <div class="items">
            <a href="mailto:M.abdullaev@blissberry.uz">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path opacity="0.4"
                  d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V14C20 16.2091 18.2091 18 16 18H4C1.79086 18 0 16.2091 0 14V4Z"
                  fill="#28303F" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.37604 4.58405C3.60581 4.23941 4.07146 4.14628 4.4161 4.37604L8.19731 6.89684C9.28898 7.62462 10.7112 7.62462 11.8029 6.89684L15.5841 4.37604C15.9287 4.14628 16.3944 4.23941 16.6241 4.58405C16.8539 4.9287 16.7608 5.39435 16.4161 5.62412L12.6349 8.14492C11.0394 9.2086 8.96078 9.2086 7.36525 8.14492L3.58405 5.62412C3.23941 5.39435 3.14628 4.9287 3.37604 4.58405Z"
                  fill="#28303F" />
              </svg>
              M.abdullaev@blissberry.uz
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom" :class="{ active: menuHandle }">
      <div class="container">
        <ul>
          <li>
            <div @click="scrollElement('hero'), menuHandle = false">
              <span v-if="$route.params.lang == 'ru'">Главная</span>
              <span v-if="$route.params.lang == 'uz'">Bosh sahifa</span>
              <span v-if="$route.params.lang == 'en'">Main</span>
            </div>
          </li>
          <li>
            <div @click="scrollElement('about'), menuHandle = false">
              <span v-if="$route.params.lang == 'ru'">О нас</span>
              <span v-if="$route.params.lang == 'uz'">Biz haqimizda</span>
              <span v-if="$route.params.lang == 'en'">About</span>
            </div>
          </li>
          <li>
            <div @click="scrollElement('products'), menuHandle = false">
              <span v-if="$route.params.lang == 'ru'">Продукция</span>
              <span v-if="$route.params.lang == 'uz'">Mahsulotlarimiz</span>
              <span v-if="$route.params.lang == 'en'">Products</span>
            </div>
          </li>
          <li>
            <div @click="scrollElement('services'), menuHandle = false">
              <span v-if="$route.params.lang == 'ru'">Сервисы</span>
              <span v-if="$route.params.lang == 'uz'">Xizmatlarimiz</span>
              <span v-if="$route.params.lang == 'en'">Services</span>
            </div>
          </li>
          <li>
            <div @click="scrollElement('contacts'), menuHandle = false">
              <span v-if="$route.params.lang == 'ru'">Контакты</span>
              <span v-if="$route.params.lang == 'uz'">Bog'lanish</span>
              <span v-if="$route.params.lang == 'en'">Contacts</span>
            </div>
          </li>
        </ul>

        <div class="lang">
          <button @click="changeLang('ru')" :class="{ disable: $route.params.lang == 'ru' }">Ru</button>
          <div class="chopstick"></div>
          <button @click="changeLang('uz')" :class="{ disable: $route.params.lang == 'uz' }">Uz</button>
          <div class="chopstick"></div>
          <button @click="changeLang('en')" :class="{ disable: $route.params.lang == 'en' }">En</button>
        </div>

        <!-- <div class="lang">
          <a href="/ru" :class="{ disable: $route.params.lang == 'ru' }">Ru</a>
          <div class="chopstick"></div>
          <a href="/uz" :class="{ disable: $route.params.lang == 'uz' }">Uz</a>
          <div class="chopstick"></div>
          <a href="/en" :class="{ disable: $route.params.lang == 'en' }">En</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuHandle: false,
    }
  },

  computed: {
    getLang() {
      return this.$store.getters.language
    },
    currentLang() {
      return this.$route.params.lang
    },
  },

  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    },

    changeLang(code) {
      this.$store.dispatch('actionLangRu', code)
      this.$router.replace({
        params: {
          lang: code,
        },
        query: this.$route.query,
      })

      localStorage.setItem('Lang', code)
    },
  },

  async mounted() {
    function scrollHeader() {
      const navbar = document.getElementById("navbar");
      if (this.scrollY >= 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
    window.addEventListener("scroll", scrollHeader);
  },

  watch: {
    currentLang() { },
  },
};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
}

.top {
  background: var(--dark);
  transition: .4s;
}

.scroll .top {
  transform: translateY(-100%);
}

.top .container {
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 12px 0;
}

.left img {
  width: 180px;
  object-fit: contain;
}

.right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.right a {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
  display: flex;
  align-items: center;
  gap: 8px;
}

.right a svg path {
  fill: white;
}

.bottom {
  padding: 12px 0;
  background: var(--light);
  transition: .4s;
}

.bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.scroll .bottom {
  transform: translateY(-100px);
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.bottom ul {
  display: flex;
  align-items: center;
  gap: 40px;
}

.bottom div {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
}

.lang {
  display: flex;
  align-items: center;
  gap: 16px;
}

.chopstick {
  width: 1px;
  height: 16px;
  background: var(--dark);
}

.lang button {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  cursor: pointer;
  color: var(--dark);
}

.lang button.disable {
  color: var(--green);
  pointer-events: none;
}

.burger {
  display: none;
}

@media screen and (max-width: 1024px) {
  .right {
    display: none;
  }

  .bottom {
    position: fixed;
    top: 92px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: 0.4s;
  }

  .scroll .top {
    transform: translateY(0);
  }

  .scroll .bottom {
    transform: translateY(0) translateX(-100%);
  }

  .bottom ul {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .left img {
    width: 160px;
  }

  .burger {
    display: flex;
  }

  .stick {
    width: 30px;
    height: 2px;
    background: white;
    position: relative;
    transition: .3s;
  }

  .stick::after {
    width: 30px;
    height: 2px;
    background: white;
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    transition: .3s;
  }

  .stick::before {
    width: 30px;
    height: 2px;
    background: white;
    content: '';
    position: absolute;
    top: -10px;
    left: 0;
    transition: .3s;
  }

  .active {
    transform: translateX(0) !important;
    padding: 32px 0;
    height: 90%;
  }

  .active .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
  }

  .bottom ul {
    gap: 24px;
  }

  .bottom li {
    width: 100%;
  }

  .bottom div {
    font-family: var(--decor);
    font-size: 20px;
  }

  .x .stick {
    transform: rotate(45deg);
  }

  .x .stick::after {
    transform: rotate(270deg);
    top: 0;
  }

  .x .stick::before {
    display: none;
  }
}
</style>
