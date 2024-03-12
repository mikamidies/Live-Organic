<template>
  <div class="master">
    <DesktopNavbar />
    <main>
      <HomeHero />
    </main>
  </div>
</template>

<script>
import DesktopNavbar from "@/components/DesktopNavbar.vue";
import HomeHero from "@/components/HomePage/HomeHero.vue";

export default {
  components: { DesktopNavbar, HomeHero },
};
</script>

<style></style>
