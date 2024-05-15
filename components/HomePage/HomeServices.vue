<template>
  <div class="wrap">
    <div class="anchor" id="services"></div>
    <div class="container">
      <h4 class="title section__title">Services</h4>
      <div class="items">
        <div class="item">
          <div class="img">
            <img src="@/assets/img/service-1.jpg" alt="" />
          </div>
          <div class="content">
            <p class="name">Export</p>
            <p class="sub">
              Fresh, high-quality fruits and vegetables imported directly to
              your doorstep. Taste the difference with our carefully selected
              produce from around the world. Enjoy the convenience of premium
              imports for your culinary creations.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/service-2.jpg" alt="" />
          </div>
          <div class="content">
            <p class="name">Import</p>
            <p class="sub">
              Fresh, high-quality fruits and vegetables imported directly to
              your doorstep. Taste the difference with our carefully selected
              produce from around the world. Enjoy the convenience of premium
              imports for your culinary creations.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/service-3.jpg" alt="" />
          </div>
          <div class="content">
            <p class="name">Delivery</p>
            <p class="sub">
              Fresh, high-quality fruits and vegetables imported directly to
              your doorstep. Taste the difference with our carefully selected
              produce from around the world. Enjoy the convenience of premium
              imports for your culinary creations.
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
  font-size: 16px;
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
    font-size: 14px;
  }
}
</style>
