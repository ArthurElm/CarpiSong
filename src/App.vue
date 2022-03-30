<template>
  <v-app style="background-color: #1F2132">
    <Home></Home>
    <BottomMenu class="btm-menu"></BottomMenu>
  </v-app>
</template>

<script>
import Home from './views/HomeView.vue'
import Profile from './views/ProfileView.vue'
import BottomMenu from './components/BottomMenu.vue'

export default {
  name: "App",
  components: {
    Home,
    Profile,
    BottomMenu
  },
  // computed:{
  //   theme(){
  //     return (this.$vuetify.theme.dark) ? 'dark' : 'light'
  //   }
  // }
}
</script>

<style lang="scss" scoped>

v-app{
  background-color: #1F2132;
}


</style>