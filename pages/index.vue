<template>
  <div class="master">
    <DesktopNavbar />
    <main>
      <HomeHero />
      <HomeAbout />
    </main>
  </div>
</template>

<script>
import DesktopNavbar from "@/components/DesktopNavbar.vue";
import HomeHero from "@/components/HomePage/HomeHero.vue";
import HomeAbout from "@/components/HomePage/HomeAbout.vue";

export default {
  components: { DesktopNavbar, HomeHero, HomeAbout },
};
</script>

<style></style>
