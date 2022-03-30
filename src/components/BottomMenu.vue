<template>
  
  <v-bottom-navigation
    v-model="value"
    dark
    shift
  >

  <a href="localhost:8080/">
    <v-btn>
      <i class="fa fa-home fa-2x" aria-hidden="true"></i>
    </v-btn>
  </a>
  
    <v-btn>
      <i class="fa fa-search fa-2x" aria-hidden="true"></i>
    </v-btn>


  <a href="localhost:8080/profile">
    <v-btn>
      <i class="fa fa-user fa-2x" aria-hidden="true"></i>
    </v-btn>
  </a>
  

    <v-btn>
      <i class="fa fa-cog fa-2x" aria-hidden="true"></i>
    </v-btn>

  </v-bottom-navigation>
</template>
  
<script>
  
  export default {
      name: 'BottomMenu',

      data: () => ({ value: 0 }),
      // computed: {
      //     color () {
      //         switch (this.value) {
      //             case 0: return 'blue-grey'
      //             case 1: return 'teal'
      //             case 2: return 'brown'
      //             case 3: return 'indigo'
      //             default: return 'blue-grey'
      //         }
      //     },
      // },
  }
</script>

<style scoped lang="scss">

.v-bottom-navigation{
  justify-content: space-around;
  height: 10vh !important;
  background-color: #B721FF !important;
  position: fixed;
  bottom: 0;
  .v-btn{
    width: 25%;
    height: 100% !important;
    background-color: #B721FF !important;
  }
}
.v-item-group.v-bottom-navigation--shift .v-btn .v-btn__content > *:not(.v-icon) {
    opacity: 0.8;
    position: absolute;
    top: 30%;
    transform: scale(0.9);
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    border: none;
    color: #fff;
    transform: scale(1);
}


.v-item-group.v-bottom-navigation--shift .v-btn--active .v-btn__content > *:not(.v-icon) {
  opacity: 1;
  top: -30%;
  transform: scale(1);
  color: rgb(180, 61, 180);
  background-color: #fff;
  border:5px solid #21D4FD;    
  height:67px;
  width:67px;
  border-radius:50%;
  -moz-border-radius:50%;
  -webkit-border-radius:50%;
  padding-top: 20%;
  filter: drop-shadow(0 0 0.75rem #08AEEA);
}

</style>

  