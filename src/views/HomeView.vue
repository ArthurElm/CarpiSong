<template>
  <section>
    <div class="home">
      <h1>CarpiSong</h1>
      <LatestListen></LatestListen>
      <ShuffleTaste></ShuffleTaste>
      <LatestFrenchRap></LatestFrenchRap>
    </div>
  </section>
</template>

<script>
import LatestListen from "@/components/LatestListen.vue";
import ShuffleTaste from "@/components/ShuffleTaste.vue";
import LatestFrenchRap from "@/components/LatestFrenchRap.vue"

  export default {
    name: 'Home',

    components: {
      LatestListen,
      ShuffleTaste,
      LatestFrenchRap
    },
  }
</script>

<style lang="scss" scoped>

.v-application{
  font-family: 'Poppins', sans-serif !important;
  background-color: #1F2132;
  .home{
      // display: flex;
      // flex-direction: column;
      // align-content: center;
      text-align: center;
      h1{
        color: white;
        padding: 26px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 36px;
      }
    }
}


</style>
