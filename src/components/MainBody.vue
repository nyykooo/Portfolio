<script>
import PageAboutMe from './pages/PageAboutMe.vue';
import PageProjects from './pages/PageProjects.vue';
import PageContact from './pages/PageContact.vue';
import PageImages from './pages/PageImages.vue';

export default {
  props: ['currentComponent'],
  components: {
    PageAboutMe,
    PageProjects,
    PageContact,
    PageImages,
  },
};
</script>

<template>
    <div>
        <PageAboutMe v-if="currentComponent === 'PageAboutMe'" />
        <PageProjects v-if="currentComponent === 'PageProjects'" />
        <PageContact v-if="currentComponent === 'PageContact'" />
        <PageImages v-if="currentComponent === 'PageImages'" />
    </div>
</template>