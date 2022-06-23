<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
     <navigation></navigation>
     <!-- <div>
       sfdfsfsdf
       <font-awesome-icon icon="fa-solid fa-check" />
       <font-awesome-icon :icon="['fa-solid', 'fa-check']" /> -->
       <!-- <div id="nav"> -->
      <!-- <router-link to="/home">Home</router-link> |
      <router-link :to="{name:'About'}">About</router-link> -->
  <!-- </div> -->
   <router-view></router-view>
<!-- implicit style (fas is assumed) -->
<!-- <font-awesome-icon icon="phone" />
       <i class="fas fa-plus"></i>
     </div> -->
      

  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Navigation from '@/components/Navigation/Navigation.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navigation
  }
}
</script>

<style lang="scss">
  @import "styles/styles.scss";
</style>
