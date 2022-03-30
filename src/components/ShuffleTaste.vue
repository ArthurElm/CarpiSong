<template>
  <section>
      <h2>Shuffle according to your taste</h2>
      <div class="shuffle">
          <img src="../assets/img/Vector.png" alt="Play icon">
          <p>Random playlist based on your ususal tates, including songs you've listened to reccently and some you've never listened to.</p>
      </div>
  </section>
</template>

<script>
export default {
    name: 'ShuffleTastes',


}
</script>

<style lang="scss" scoped>


h2{
    display: flex;
    color: #21D4FD;
    align-self: left !important;
    font-weight: 600;
    font-size: 20px;
    text-shadow: 0px 0px 2px #21D4FD;
    padding: 20px 0 0 20px;
}
.shuffle{
    width: 90vw;
    margin:  25px 5vw 0px 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(93.17deg, #21D4FD -0.52%, #B721FF 114.73%);
    border-radius: 16px;

    img{
        max-width: 27px;
        margin:0 40px;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        color: #fff;
        padding: 12px 12px 12px 0; 
        margin: 0;
        text-align: left;
    }
}
</style>