<template>
  <div class="wrap">
    <div class="container">
      <div class="top">
        <div class="brand">
          <img src="@/assets/img/logo/logo-2.png" alt="" />
        </div>
      </div>
      <div class="mid">
        <div class="row">
          <div class="">
            <h4 class="tite" style="margin-bottom: 16px">Contacts</h4>
            <div class="items">
              <div class="item">
                <p class="sup">Phone number</p>
                <a href="#" class="txt nelly"> +90 (800) 000-0000 </a>
              </div>

              <div class="item">
                <p class="sup">Email</p>
                <a href="#" class="txt nelly"> organiclive@gmail.com </a>
              </div>
            </div>

            <div class="item last">
              <p class="sup">Address:</p>
              <p class="txt">
                «FOOD CITY TASHKENT» M
                100053, тошкент шахар.
                Бектемир тумани, Нурли йул МФИ
                Мехнатобод кучаси-82
              </p>
            </div>
          </div>
          <div class="">
            <div class="links">
              <ul>
                <h4 class="tite">Menu</h4>
                <li>
                  <button @click="scrollElement('hero')"> Main </button>
                </li>
                <li>
                  <button @click="scrollElement('about')"> About </button>
                </li>
                <li>
                  <button @click="scrollElement('products')"> Products </button>
                </li>
                <li>
                  <button @click="scrollElement('services')"> Services </button>
                </li>
                <li>
                  <button @click="scrollElement('contacts')"> Contacts </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <p class="info">
              Wild Blueberries also known as Lowbush Blueberries are sweet,
              tangy, amazingly popular and extremely nutritious. Labeled as a
              super-food they are low in calories and high in fiber, vitamins
              and minerals.
            </p>
            <div class="items socials">
              <p class="tite">Social media</p>
              <div class="socs">
                <a href="https://t.me/Blissberryuz" target="_blank" class="soc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22.6593 3.49279C22.3906 3.17498 21.9881 3 21.5258 3C21.2746 3 21.0083 3.05113 20.7348 3.15225L2.11221 10.0269C1.12394 10.3916 0.990834 10.9389 0.999394 11.2327C1.00795 11.5265 1.17295 12.0657 2.18103 12.3759C2.18707 12.3777 2.19312 12.3795 2.19916 12.3811L6.06197 13.4501L8.15099 19.227C8.43582 20.0146 9.07515 20.5038 9.81972 20.5038C10.2892 20.5038 10.7509 20.3136 11.1551 19.9539L13.5444 17.8264L17.0099 20.5249C17.0103 20.5252 17.0108 20.5254 17.0111 20.5257L17.044 20.5514C17.047 20.5536 17.0502 20.5561 17.0532 20.5583C17.4384 20.8473 17.8589 20.9998 18.2696 21H18.2698C19.0722 21 19.7112 20.4256 19.8974 19.5367L22.9487 4.96647C23.0712 4.38164 22.9685 3.85833 22.6593 3.49279ZM7.35422 13.2471L14.8068 9.56524L10.1663 14.3336C10.0903 14.4117 10.0364 14.5073 10.0099 14.6114L9.1151 18.1164L7.35422 13.2471ZM10.2818 19.0368C10.2509 19.0642 10.2199 19.0887 10.1888 19.1113L11.019 15.8597L12.5291 17.0357L10.2818 19.0368ZM21.6853 4.71894L18.634 19.2893C18.6046 19.4288 18.5108 19.7532 18.2696 19.7532C18.1504 19.7532 18.0007 19.6904 17.8475 19.5763L13.9205 16.5186C13.92 16.5181 13.9194 16.5176 13.9187 16.5173L11.5821 14.6977L18.2928 7.80199C18.5076 7.58124 18.5271 7.24313 18.3389 7.00063C18.1506 6.75813 17.8094 6.68184 17.5302 6.81981L6.493 12.2727L2.57765 11.1894L21.1945 4.31688C21.3518 4.25877 21.4615 4.2466 21.5258 4.2466C21.5653 4.2466 21.6354 4.25114 21.6614 4.28214C21.6957 4.32256 21.7393 4.46037 21.6853 4.71894Z"
                      fill="#bec4d2" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61559396834267&" target="_blank" class="soc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M15.0104 4.99012L15.0124 4.9914M8.7555 19.2463H11.2445C14.0447 19.2463 15.4449 19.2463 16.5144 18.7013C17.4552 18.222 18.2201 17.4571 18.6995 16.5162C19.2445 15.4467 19.2445 14.0466 19.2445 11.2463V8.75732C19.2445 5.95706 19.2445 4.55693 18.6995 3.48737C18.2201 2.54656 17.4552 1.78166 16.5144 1.30229C15.4449 0.757324 14.0447 0.757324 11.2445 0.757324H8.75549C5.95523 0.757324 4.5551 0.757324 3.48554 1.30229C2.54473 1.78166 1.77983 2.54656 1.30046 3.48737C0.755493 4.55693 0.755493 5.95706 0.755493 8.75733V11.2463C0.755493 14.0466 0.755493 15.4467 1.30046 16.5162C1.77983 17.4571 2.54473 18.222 3.48554 18.7013C4.5551 19.2463 5.95523 19.2463 8.7555 19.2463ZM13.665 10.0021C13.665 12.0252 12.025 13.6652 10.0019 13.6652C7.97884 13.6652 6.33882 12.0252 6.33882 10.0021C6.33882 7.97906 7.97884 6.33904 10.0019 6.33904C12.025 6.33904 13.665 7.97906 13.665 10.0021Z"
                      stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
                <a href="#" target="_blank" class="soc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12.002 21.2852C17.1301 21.2852 21.2874 17.1284 21.2874 12.0007C21.2874 6.87309 17.1301 2.71631 12.002 2.71631C6.87377 2.71631 2.71655 6.87309 2.71655 12.0007C2.71655 17.1284 6.87377 21.2852 12.002 21.2852ZM12.002 21.2852V13.2196M15.9806 7.6291L15.8433 7.58898C13.923 7.02795 12.002 8.46803 12.002 10.4686V13.2196M12.002 13.2196H15.3056M12.002 13.2196H9.30521"
                      stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p class="info mamba">2024 @BlissBerry Inc</p>

        <p class="info">All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
// import mediaApi from '@/api/media'
// import servicesApi from '@/api/services'

// export default {
//     name: 'HajtexDeskropFooter',

//     data() {
//         return {
//             info: {},
//             services: {},
//         }
//     },

//     async fetch() {
//         const info = await mediaApi.getInfo(this.$axios, this.$route.params.lang)
//         const services = await servicesApi.getServices(
//             this.$axios,
//             this.$route.params.lang
//         )

//         this.info = info
//         this.services = services
//     },

//     mounted() { },

//     methods: {
//         async fetchAll() {
//             const info = await mediaApi.getInfo(this.$axios, this.$route.params.lang)
//             const services = await servicesApi.getServices(
//                 this.$axios,
//                 this.$route.params.lang
//             )
//             this.info = info
//             this.services = services
//         },
//     },

//     computed: {
//         currentLang() {
//             return this.$route.params.lang
//         },
//     },

//     watch: {
//         currentLang() {
//             this.fetchAll()
//         },
//     },
// }

export default {
  methods: {
    scrollElement(id) {
      const element = document.getElementById(id);
      element.scrollIntoView({ block: "start", behavior: "smooth" });
    },
  },
}
</script>

<style scoped>
.right {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}

.socials svg path {
  stroke: #bec4d2;
}

.socials {
  margin: 0;
}

.row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.wrap {
  padding: 48px 0;
  background: var(--green);
  color: white;
}

.brand img {
  width: 220px;
  object-fit: contain;
}

.top {
  margin-bottom: 48px;
}

.txt {
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 27px */
}

.last .txt {
  max-width: 400px;
  display: block;
}

.txt:hover {
  text-decoration: none;
}

.nelly {
  position: relative;
}

.info {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #bec4d2;
}

.sup {
  color: #bec4d2;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 130%;
  /* 18.2px */
  margin-bottom: 4px;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
}

.mid {
  margin-bottom: 96px;
}

.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.socials {
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}

.socs {
  display: flex;
  gap: 40px;
}

.soc {
  font-size: 32px;
  color: white;
}

.links {
  display: flex;
  justify-content: space-around;
}

.tite {
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 110%;
  /* 19.8px */
  text-transform: uppercase;
  margin-bottom: 0;
}

.links ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.links button {
  color: #bec4d2 !important;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  padding: 0;
  line-height: 150%;
  /* 27px */
}

.sup {
  color: white !important;
}

@media screen and (max-width: 1500px) {
  .txt {
    font-size: 32px;
  }
}

@media screen and (max-width: 1024px) {
  .txt {
    font-weight: 400;
    font-size: 20px;
    line-height: 110%;
  }

  .info {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    max-width: 90%;
  }

  .items {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 40px;
  }

  .items .txt {
    font-size: 24px;
  }

  .last {
    margin-bottom: 40px;
  }

  .socials {
    gap: 0px;
    margin-bottom: 0;
  }

  .item .sup,
  .socials .sup {
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: white;
  }

  .bottom {
    flex-direction: column;
    align-items: flex-start;
  }

  .bottom .links {
    order: 0;
    margin: 0 0 40px 0;
  }

  .bottom .links ul {
    max-width: 100%;
    gap: 16px;
  }

  .mamba {
    order: 1;
  }

  .mid {
    margin-bottom: 40px;
  }

  .links {
    flex-direction: column;
    justify-content: flex-start;
    gap: 24px;
    margin-bottom: 32px;
  }

  .row {
    grid-template-columns: repeat(1, 1fr);
  }

  .right {
    align-items: flex-start;
  }

  .links ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .items {
    gap: 24px;
  }

  .brand img {
    width: 160px;
  }

  .top {
    margin-bottom: 32px;
  }
}
</style>
