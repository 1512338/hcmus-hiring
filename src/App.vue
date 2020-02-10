<template>
  <v-app class="class-app">
    <v-content class="scroll-container">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
  }),
};
</script>

<style lang="scss" scoped>
  .class-app {
    background-image: url('./assets/hcmus-background.png') !important;
    background-size: cover !important;
  }
  html, body {
    overflow: auto !important; /* Hide scrollbars */
  }
  .scroll-container{
    height: 100%;
    overflow-y: hidden;
    backface-visibility: hidden;
  }
</style>