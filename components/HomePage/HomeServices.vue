<template>
  <div class="wrap">
    <div class="anchor" id="services"></div>
    <div class="container">
      <h4 class="title section__title">
        <h2 class="title section__title" v-if="$route.params.lang == 'en'">Services</h2>
        <h2 class="title section__title" v-if="$route.params.lang == 'ru'">Наши Сервисы</h2>
        <h2 class="title section__title" v-if="$route.params.lang == 'uz'">Xizmatlarimiz</h2>
      </h4>
      <div class="items">
        <div class="item">
          <div class="img">
            <img src="@/assets/img/service-1.jpg" alt="" />
          </div>
          <div class="content">
            <p class="name">
              <span v-if="$route.params.lang == 'ru'">Экспорт</span>
              <span v-if="$route.params.lang == 'uz'">Eksport</span>
              <span v-if="$route.params.lang == 'en'">Export</span>
            </p>

            <p class="sub">
              <span v-if="$route.params.lang == 'ru'">Мы предлагаем комплексные услуги по экспорту свежих фруктов, ягод
                и овощей из Узбекистана. Наша команда обеспечивает тщательный отбор и проверку продукции, гарантируя её
                высокое качество и свежесть. Мы организуем всю логистику — от упаковки до доставки — чтобы ваши товары
                прибыли в наилучшем состоянии и в срок. Наши клиенты могут рассчитывать на надежное сотрудничество и
                индивидуальный подход к каждому заказу. Независимо от того, где вы находитесь, мы доставим лучшие
                узбекские продукты прямо к вашему порогу.</span>
              <span v-if="$route.params.lang == 'uz'">
                O'zbekistondan yangi meva, rezavor meva va sabzavotlarni eksport qilish bo'yicha kompleks xizmatlarni
                taklif etamiz. Bizning jamoamiz mahsulotlarni sinchkovlik bilan tanlash va tekshirishni ta'minlaydi,
                ularning yuqori sifati va yangiligini kafolatlaydi. Mahsulotlaringiz eng yaxshi holatda va o'z vaqtida
                yetib borishi uchun biz barcha logistikani — qadoqlashdan tortib yetkazib berishgacha tartibga solamiz.
                Mijozlarimiz ishonchli hamkorlik va har bir buyurtmaga individual yondashishni kutishlari mumkin. Qaerda
                bo'lishingizdan qat'i nazar, biz eng yaxshi o'zbek mahsulotlarini to'g'ridan-to'g'ri ostonangizga
                yetkazib beramiz.
              </span>
              <span v-if="$route.params.lang == 'en'">
                We offer comprehensive services for the export of fresh fruits, berries and vegetables from Uzbekistan.
                Our team ensures careful selection and verification of products, ensuring their high quality and
                freshness. We will arrange all logistics — from packaging to delivery — so that your goods arrive in the
                best condition and on time. Our customers can count on reliable cooperation and an individual approach
                to each order. No matter where you are, we will deliver the best Uzbek products right to your doorstep.
              </span>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/service-2.jpg" alt="" />
          </div>
          <div class="content">
            <p class="name">
              <span v-if="$route.params.lang == 'ru'">Импорт</span>
              <span v-if="$route.params.lang == 'uz'">Import</span>
              <span v-if="$route.params.lang == 'en'">Import</span>
            </p>
            <p class="sub">
              <span v-if="$route.params.lang == 'ru'">Мы предоставляем полный спектр услуг по импорту экзотических
                фруктов, ягод и овощей из лучших мировых хозяйств. Наши специалисты тщательно отбирают только самую
                качественную и свежую продукцию, чтобы удовлетворить потребности наших клиентов. Мы берем на себя все
                этапы логистики — от таможенного оформления до доставки на ваш склад или магазин. Наша цель — обеспечить
                бесперебойное снабжение вашего бизнеса первоклассными продуктами со всего мира. Работая с нами, вы
                можете быть уверены в надежности и эффективности каждого этапа поставок.</span>
              <span v-if="$route.params.lang == 'uz'">
                Biz dunyodagi eng yaxshi fermer xo'jaliklaridan ekzotik mevalar, rezavorlar va sabzavotlarni import
                qilish bo'yicha to'liq xizmatlarni taqdim etamiz. Bizning mutaxassislarimiz mijozlarimizning
                ehtiyojlarini qondirish uchun faqat eng yuqori sifatli va eng yangi mahsulotlarni sinchkovlik bilan
                tanlaydilar. Biz logistikaning barcha bosqichlarini o'z zimmamizga olamiz — bojxona rasmiylashtiruvidan
                tortib omboringizga yoki do'koningizga etkazib berishgacha. Bizning maqsadimiz sizning biznesingizni
                butun dunyo bo'ylab eng yaxshi mahsulotlar bilan uzluksiz ta'minlashni ta'minlashdir. Biz bilan ishlash
                orqali siz etkazib berishning har bir bosqichining ishonchliligi va samaradorligiga amin bo'lishingiz
                mumkin.
              </span>
              <span v-if="$route.params.lang == 'en'">
                We provide a full range of services for the import of exotic fruits, berries and vegetables from the
                world's best farms. Our specialists carefully select only the highest quality and freshest products to
                meet the needs of our customers. We take care of all stages of logistics — from customs clearance to
                delivery to your warehouse or store. Our goal is to ensure the uninterrupted supply of your business
                with first—class products from all over the world. Working with us, you can be sure of the reliability
                and efficiency of each stage of delivery.
              </span>
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/service-3.jpg" alt="" />
          </div>
          <div class="content">
            <p class="name">
              <span v-if="$route.params.lang == 'ru'">Доставка</span>
              <span v-if="$route.params.lang == 'uz'">Yetkazib berish</span>
              <span v-if="$route.params.lang == 'en'">Delivery</span>
            </p>
            <p class="sub">
              <span v-if="$route.params.lang == 'ru'">Мы предлагаем надежные и быстрые услуги по доставке свежих
                фруктов, ягод и овощей прямо к вашему порогу. Наша команда организует транспортировку с соблюдением всех
                стандартов качества и безопасности, чтобы продукты сохраняли свою свежесть и вкусовые качества.
                Независимо от объема вашего заказа, мы гарантируем своевременную и аккуратную доставку. С нами вы можете
                быть уверены, что ваши любимые продукты прибудут в идеальном состоянии, куда бы вы ни находились.
                Доверьте нам заботу о вашей доставке, и наслаждайтесь лучшими продуктами без лишних хлопот..</span>
              <span v-if="$route.params.lang == 'uz'">
                Biz yangi meva, rezavor meva va sabzavotlarni to'g'ridan-to'g'ri ostonangizga yetkazib berish bo'yicha
                ishonchli va tezkor xizmatlarni taklif etamiz. Bizning jamoamiz mahsulotlarning tazelik va ta'mini
                saqlab qolish uchun barcha sifat va xavfsizlik standartlariga muvofiq transportni tashkil qiladi.
                Buyurtmangiz hajmidan qat'i nazar, biz o'z vaqtida va toza etkazib berishni kafolatlaymiz. Biz bilan siz
                sevimli mahsulotlaringiz qayerga borsangiz ham mukammal holatda kelishiga amin bo'lishingiz mumkin.
                Yetkazib berishingizga g'amxo'rlik qilish uchun bizga ishoning va hech qanday muammosiz eng yaxshi
                mahsulotlardan bahramand bo'ling.
              </span>
              <span v-if="$route.params.lang == 'en'">
                We offer reliable and fast delivery services for fresh fruits, berries and vegetables right to your
                doorstep. Our team organizes transportation in compliance with all quality and safety standards so that
                the products retain their freshness and taste. Regardless of the volume of your order, we guarantee
                timely and accurate delivery. With us, you can be sure that your favorite products will arrive in
                perfect condition wherever you are. Trust us to take care of your delivery, and enjoy the best products
                without unnecessary hassle.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  background: var(--green);
  padding: 80px 0;
}

.wrap {
  position: relative;
}

.title {
  color: white;
}

.title::after {
  background: white;
}

.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.img img {
  height: 320px;
  object-fit: cover;
  width: 100%;
  display: flex;
}

.content {
  padding: 12px 24px 24px 24px;
  background: var(--light);
  height: 100%;
}

.name {
  font-size: 24px;
  color: var(--dark);
  font-family: var(--decor-sm);
  margin-bottom: 12px;
}

.item {
  border-radius: 12px;
  overflow: hidden;
}

.sub {
  font-size: 14px;
  line-height: 150%;
}

@media screen and (max-width: 1024px) {
  .title {
    margin-bottom: 24px;
  }

  .wrap {
    padding: 40px 0;
  }

  .item {
    border-radius: 8px;
  }

  .items {
    grid-template-columns: repeat(1, 1fr);
  }

  .img img {
    height: 200px;
  }

  .content {
    padding: 12px;
  }

  .name {
    font-size: 18px;
  }

  .sub {
    font-size: 12px;
  }
}
</style>
