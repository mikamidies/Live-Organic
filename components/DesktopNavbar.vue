<template>
  <div class="wrap" id="navbar">
    <div class="top">
      <div class="container">
        <div class="left">
          <NuxtLink to="/">
            <img src="@/assets/img/logo/logo.png" alt="" />
          </NuxtLink>
        </div>
        <div class="right">
          <div class="item">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path opacity="0.4"
                  d="M18 16V14.3541C18 13.5363 17.5021 12.8008 16.7428 12.4971L14.7086 11.6835C13.7429 11.2971 12.6422 11.7156 12.177 12.646L12 13C12 13 9.5 12.5 7.5 10.5C5.5 8.5 5 6 5 6L5.35402 5.82299C6.28438 5.35781 6.70285 4.25714 6.31654 3.29136L5.50289 1.25722C5.19916 0.497903 4.46374 0 3.64593 0H2C0.895431 0 0 0.89543 0 2C0 10.8366 7.16344 18 16 18C17.1046 18 18 17.1046 18 16Z"
                  fill="#28303F" />
              </svg>
              +90 (800) 000-0000
            </a>
          </div>
          <div class="items">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path opacity="0.4"
                  d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V14C20 16.2091 18.2091 18 16 18H4C1.79086 18 0 16.2091 0 14V4Z"
                  fill="#28303F" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M3.37604 4.58405C3.60581 4.23941 4.07146 4.14628 4.4161 4.37604L8.19731 6.89684C9.28898 7.62462 10.7112 7.62462 11.8029 6.89684L15.5841 4.37604C15.9287 4.14628 16.3944 4.23941 16.6241 4.58405C16.8539 4.9287 16.7608 5.39435 16.4161 5.62412L12.6349 8.14492C11.0394 9.2086 8.96078 9.2086 7.36525 8.14492L3.58405 5.62412C3.23941 5.39435 3.14628 4.9287 3.37604 4.58405Z"
                  fill="#28303F" />
              </svg>
              organiclive@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="container">
        <ul>
          <li>
            <div @click="scrollElement('hero')"> Main </div>
          </li>
          <li>
            <div @click="scrollElement('about')"> About </div>
          </li>
          <li>
            <div @click="scrollElement('products')"> Products </div>
          </li>
          <li>
            <div @click="scrollElement('services')"> Services </div>
          </li>
          <li>
            <div @click="scrollElement('contacts')"> Contacts </div>
          </li>
        </ul>

        <div class="lang">
          <NuxtLink to="/">Ru</NuxtLink>
          <div class="stick"></div>
          <NuxtLink to="/index-uz">Uz</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
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

.stick {
  width: 1px;
  height: 16px;
  background: var(--dark);
}

.lang a {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  color: var(--dark);
}

@media screen and (max-width: 1024px) {
  .right {
    display: none;
  }

  .bottom {
    position: fixed;
    top: 72px;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(-100%);
    transition: 0.4s;
  }

  .bottom ul {
    flex-direction: column;
    align-items: flex-start;
  }

  .left img {
    width: 120px;
  }
}
</style>
