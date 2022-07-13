<template>
  <div id="app">
    <div class="container">
      <shop-window />
    </div>
  </div>
</template>

<script>

import shopWindow from '@/components/Shop-Window.vue';

export default {
  name: 'App',
  components: {
    shopWindow,
  },
};
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  //margin-top: 60px;
}
</style>
