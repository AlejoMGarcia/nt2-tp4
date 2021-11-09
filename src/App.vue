<template>
  <div id="app" class="container-fluid mt-2">
    <div class="jumbotron">
      <h1>Trabajo Práctico n° 4</h1>
      <hr>
      <hr>
      <br>
    
      <Navbar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
  #app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px; */
  }

  .jumbotron {
    padding: 32px !important;
  }

  h1 {
    color: goldenrod;
  }

</style>
