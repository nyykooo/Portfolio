<script>
import MainHeader from './components/MainHeader.vue';
import MainBody from './components/MainBody.vue';
import MainFooter from './components/MainFooter.vue';

export default {
  components: {
    MainHeader,
    MainBody,
    MainFooter,
  },
  data() {
    return {
      currentComponent: 'PageAboutMe',
    };
  },
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName;
    },
  },
};
</script>

<style src="./assets/css/app.css"></style>

<template>
  <div class="app">
    <MainHeader @change-component="changeComponent" />
    <MainBody :current-component="currentComponent" />
    <MainFooter />
  </div>
</template>
