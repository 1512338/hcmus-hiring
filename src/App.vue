<template>
  <v-app >
    <v-content class="scroll-container">
      <router-view/>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './commons/Footer'
export default {
  
  name: 'App',

  components: {
    Footer
  },

  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
 
</style>