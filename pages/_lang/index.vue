<template>
  <div class="master">
    <DesktopNavbar />
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeProducts />
      <HomeForm />
    </main>
    <DesktopFooter />
  </div>
</template>

<script>
import DesktopNavbar from "@/components/DesktopNavbar.vue";
import HomeHero from "@/components/HomePage/HomeHero.vue";
import HomeAbout from "@/components/HomePage/HomeAbout.vue";
import HomeServices from "@/components/HomePage/HomeServices.vue";
import HomeProducts from "@/components/HomePage/HomeProducts.vue"
import HomeForm from "@/components/HomePage/HomeForm.vue"
import DesktopFooter from "@/components/DesktopFooter.vue"

export default {
  components: { DesktopNavbar, HomeHero, HomeAbout, HomeServices, HomeProducts, HomeForm, DesktopFooter },
};
</script>

<style></style>
