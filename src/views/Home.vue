<template>
  <div class="container-fluid">
    <!-- <Slider /> -->
    <Game />
  </div>
</template>

<script>
import Game from "../components/Game.vue";
// import Slider from "../components/Slider.vue";
export default {
  name: "Home",
  components: {
    Game,
    // Slider,
  },
};
</script>

<style scoped>
</style>