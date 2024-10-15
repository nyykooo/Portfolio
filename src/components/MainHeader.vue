<script>
export default {
  methods: {
    showComponent(componentName) {
      this.$emit('change-component', componentName);
    },
  },
};
</script>

<template>
  <div class="header">
    <div @click="showComponent('PageAboutMe')" class="header__button">About Me</div>
    <div @click="showComponent('PageProjects')" class="header__button">Projects</div>
    <div @click="showComponent('PageContact')" class="header__button">Contact</div>
    <div @click="showComponent('PageImages')" class="header__button">Images</div>
  </div>
</template>
