<template>
  <div class="wrap">
    <div class="container">
      <h4 class="title section__title">Products</h4>
      <div class="items">
        <div class="item">
          <div class="badge">Save 11%</div>
          <div class="img">
            <img src="@/assets/img/product-1.png" alt="" />
          </div>
          <div class="content">
            <p class="name">Apple</p>
            <p class="price">11$ for one KG</p>
          </div>
        </div>
        <div class="item">
          <div class="badge">Save 11%</div>
          <div class="img">
            <img src="@/assets/img/product-2.png" alt="" />
          </div>
          <div class="content">
            <p class="name">Apple</p>
            <p class="price">11$ for one KG</p>
          </div>
        </div>
        <div class="item">
          <div class="badge">Save 11%</div>
          <div class="img">
            <img src="@/assets/img/product-3.png" alt="" />
          </div>
          <div class="content">
            <p class="name">Apple</p>
            <p class="price">11$ for one KG</p>
          </div>
        </div>
        <div class="item">
          <div class="badge">Save 11%</div>
          <div class="img">
            <img src="@/assets/img/product-4.png" alt="" />
          </div>
          <div class="content">
            <p class="name">Apple</p>
            <p class="price">11$ for one KG</p>
          </div>
        </div>
        <div class="item">
          <div class="badge">Save 11%</div>
          <div class="img">
            <img src="@/assets/img/product-5.png" alt="" />
          </div>
          <div class="content">
            <p class="name">Apple</p>
            <p class="price">11$ for one KG</p>
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
  padding: 80px 0;
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
}

.badge {
  position: absolute;
  top: 0;
  left: 0;
  background: red;
  color: white;
  padding: 4px 8px;
}

.img img {
  width: 100%;
  height: 280px;
  object-fit: contain;
  display: flex;
}

.content {
  padding: 24px;
}

.name {
  font-size: 24px;
  color: var(--dark);
  font-family: var(--decor-sm);
  margin-bottom: 12px;
}

.price {
  font-size: 16px;
  line-height: 150%;
  color: var(--green);
}
@media screen and (max-width: 1024px) {
  .wrap {
    padding: 40px 0;
  }
  .title {
    margin-bottom: 24px;
  }

  .items {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .img img {
    height: 120px;
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
}
</style>
