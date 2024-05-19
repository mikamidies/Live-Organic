<template>
  <div class="wrap">
    <div class="anchor" id="contacts"></div>
    <div class="container">
      <div class="top">
        <h4 class="title">
          <span v-if="$route.params.lang == 'ru'">Контакты</span>
          <span v-if="$route.params.lang == 'uz'">Bog'lanish</span>
          <span v-if="$route.params.lang == 'en'">Contacts</span>
        </h4>
        <div class="right">
          <div class="item">
            <p class="sup">
              <span v-if="$route.params.lang == 'ru'">Адрес:</span>
              <span v-if="$route.params.lang == 'uz'">Manzil:</span>
              <span v-if="$route.params.lang == 'en'">Address:</span>
            </p>
            <p class="value">
              <span v-if="$route.params.lang == 'ru'">
                Город Ташкент, Бектемирский район, ул. Мехтабад 82. Комплекс" FOOD CITY TASHKENT"
              </span>
              <span v-if="$route.params.lang == 'uz'">
                Tashkent City, Bektemir district, Mehnatabad Street 82. "FOOD CITY TASHKENT" complex
              </span>
              <span v-if="$route.params.lang == 'en'">
                Toshkent shahar, Bektemir tumani, Mehnatobod ko'chasi 82. "FOOD
                CITY TASHKENT" majmuasi
              </span>
            </p>
          </div>
          <div class="item">
            <p class="sup">Email:</p>
            <a :href="`mailto:M.abdullaev@blissberry.uz`" class="value">M.abdullaev@blissberry.uz</a>
          </div>
          <div class="item">
            <p class="sup">
              <span v-if="$route.params.lang == 'ru'">Номер телефона:</span>
              <span v-if="$route.params.lang == 'uz'">Telefon raqami:</span>
              <span v-if="$route.params.lang == 'en'">Phone number:</span>
            </p>
            <a :href="`tel:+998900160606`" class="value">+998 90 016 0606</a>
            <a :href="`tel:+998930067070`" class="value">+998 93 006 7070</a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="form" data-aos="fade-right" data-aos-duration="500">
          <h4 class="par">
            <span v-if="$route.params.lang == 'ru'">Свяжитесь с нами</span>
            <span v-if="$route.params.lang == 'uz'">Biz bilan bog'laning</span>
            <span v-if="$route.params.lang == 'en'">Get in touch</span>
          </h4>
          <form @submit.prevent="sendTelegram">


            <div class="inputter">
              <label v-if="labelHandle" for="name">
                <span v-if="$route.params.lang == 'ru'">Ваше имя</span>
                <span v-if="$route.params.lang == 'uz'">Ismingiz</span>
                <span v-if="$route.params.lang == 'en'">Your name</span>
              </label>
              <input id="name" @click="labelHandle = false" type="text" required v-model="name" />
            </div>

            <div class="inputter">
              <label v-if="labelHandle2" for="number">
                <span v-if="$route.params.lang == 'ru'">Номер телефона</span>
                <span v-if="$route.params.lang == 'uz'">Telefon raqamingiz</span>
                <span v-if="$route.params.lang == 'en'">Phone number</span>
              </label>
              <input id="number" @click="labelHandle2 = false" type="number" required v-model="number" />
            </div>

            <div class="inputter">
              <label v-if="labelHandle3" for="message">
                <span v-if="$route.params.lang == 'ru'">Комментарий</span>
                <span v-if="$route.params.lang == 'uz'">Izohingiz</span>
                <span v-if="$route.params.lang == 'en'">Comments</span>
              </label>
              <input id="message" @click="labelHandle3 = false" type="text" v-model="message" />
            </div>

            <div class="check">
              <input type="checkbox" id="check" required />
              <label for="check">
                <span v-if="$route.params.lang == 'ru'">Я согласен с условиями Политики конфиденциальности</span>
                <span v-if="$route.params.lang == 'uz'">Men Maxfiylik siyosati shartlariga rozilik bildiraman</span>
                <span v-if="$route.params.lang == 'en'">I agree to the terms of the Privacy Policy</span>
              </label>
            </div>

            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                <path
                  d="M18.5 16V14.3541C18.5 13.5363 18.0021 12.8008 17.2428 12.4971L15.2086 11.6835C14.2429 11.2971 13.1422 11.7156 12.677 12.646L12.5 13C12.5 13 10 12.5 8 10.5C6 8.5 5.5 6 5.5 6L5.85402 5.82299C6.78438 5.35781 7.20285 4.25714 6.81654 3.29136L6.00289 1.25722C5.69916 0.497903 4.96374 0 4.14593 0H2.5C1.39543 0 0.5 0.89543 0.5 2C0.5 10.8366 7.66344 18 16.5 18C17.6046 18 18.5 17.1046 18.5 16Z"
                  fill="white" />
              </svg>
              <span v-if="$route.params.lang == 'ru'">Отправить</span>
              <span v-if="$route.params.lang == 'uz'">Yuborish</span>
              <span v-if="$route.params.lang == 'en'">Submit</span>
            </button>
          </form>
        </div>

        <div class="map" data-aos="fade-up" data-aos-duration="1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6003.4144666137345!2d69.3183402144135!3d41.20635596266085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5ddcb1e4b3c1%3A0x67d4563d686bc430!2sFood%20city%20Tashkent!5e0!3m2!1sru!2s!4v1715794763376!5m2!1sru!2s"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "",
      name: "",
      message: "",

      token: "7184404488:AAG0SukaYR3PxzT-REfMC8xJE8OLLGdxIA8",
      chatId: "-1002037246623",

      labelHandle: true,
      labelHandle2: true,
      labelHandle3: true,
    };
  },

  mounted() {
  },

  methods: {
    sendTelegram() {
      const message = `Name: ${this.name}%0APhone number: ${this.number}%0AMessage: ${this.message}`;

      this.$axios
        .post(
          `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${message}`
        )
        .then((response) => {
          console.log("Successfully", response);
          this.number = "";
          this.name = "";
          this.message = "";
          alert("Muvofaqqiyatli jo'natildi");
        }),
        (error) => {
          console.log(error);
        };
    },
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
  overflow: hidden;
}

.wrap {
  position: relative;
}

.title {
  color: var(--Black, #020105);
  font-family: var(--decor-sm);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 57.6px */
  padding-left: 16px;
  border-left: 4px solid var(--green);
}

.top {
  display: grid;
  grid-template-columns: 347px 1fr;
  margin-bottom: 24px;
  align-items: flex-start;
  gap: 16px;
}

.right {
  display: grid;
  grid-template-columns: 4fr 2fr 2fr;
  gap: 16px;
}

.sup {
  color: var(--grey-64, #5d5d5f);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;
  /* 18.2px */
  margin-bottom: 8px;
}

.value {
  color: var(--Black, #020105);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  display: flex;
  max-width: 90%;
  /* 33.6px */
}

.form {
  background: var(--Apple-Grey, #f5f5f7);
  padding: 24px;
  min-height: 532px;
  border-radius: 12px;
}

.bottom {
  display: grid;
  grid-template-columns: 347px 1fr;
  gap: 16px;
}

.par {
  color: var(--Dark-blue, #1d1931);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin-bottom: 24px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.inputter {
  position: relative;
  margin-bottom: 40px;
  border-bottom: 1px solid #dddfe2;
  height: 40px;
}

input {
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  color: black;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding-left: 8px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.inputter label {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  position: absolute;
  left: 8px;
  top: 50%;
  z-index: 1;
  transform: translateY(-50%);
}

input:focus,
input:target {
  background: #f5f5f7;
}

.check {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 50px;
}

.check label {
  color: var(--Dark-blue, #1d1931);
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 30px */
}

.form button {
  border-radius: 8px;
  background: var(--green);
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: var(--White, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 27px */
  height: 66px;
}

.map iframe {
  width: 100%;
  min-height: 100%;
  border-radius: 12px;
}

@media screen and (max-width: 1024px) {
  .wrap {
    padding-bottom: 48px;
  }

  .title {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }

  .top {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }

  .right {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }

  .sup {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin: 0;
  }

  .value {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
  }

  .par {
    font-size: 18px;
    font-family: var(--decor-sm);
    font-style: normal;
    font-weight: 500;
    line-height: 150%;
    margin-bottom: 18px;
  }

  input {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 12px;
    padding-bottom: 8px;
  }

  .check {
    align-items: center;
    margin-bottom: 18px;
  }

  .check input {
    margin: 0;
  }

  .check label {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  .form button {
    width: 100%;
    padding: 10px 24px;
    height: 40px;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    gap: 8px;
  }

  .bottom {
    grid-template-columns: repeat(1, 1fr);
  }

  .form {
    min-height: auto;
  }

  .bottom iframe {
    height: 320px;
  }

  .inputter {
    margin-bottom: 24px;
  }
}
</style>
