<template>
  <div id="app">
    <MainMenu />
       
    <RouterView></RouterView>
    <AppFooter></AppFooter>
</div>
</template>

<script>
import { RouterView } from 'vue-router';
import MainMenu from './components/MainMenu.vue'
import AppFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    MainMenu,
    RouterView,
    AppFooter
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: black;
  margin: 0;
  padding: 0;
  

}

/* light : #FDEEDC
#FFD8A9
#F1A661
#E38B29 
../
0A1D37
FFBD9B
FFD8CC
FFEEDB*/
</style>
