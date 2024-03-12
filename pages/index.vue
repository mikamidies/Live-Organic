<template>
  <div class="master">
    <DesktopNavbar />
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
    </main>
  </div>
</template>

<script>
import DesktopNavbar from "@/components/DesktopNavbar.vue";
import HomeHero from "@/components/HomePage/HomeHero.vue";
import HomeAbout from "@/components/HomePage/HomeAbout.vue";
import HomeServices from "@/components/HomePage/HomeServices.vue";

export default {
  components: { DesktopNavbar, HomeHero, HomeAbout, HomeServices },
};
</script>

<style></style>
