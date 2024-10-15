
<template>
  <div>
    <div class="projects" v-if="!currentProject">
      <button class="projects__buttons" @click="showProject('ProjectFdf')">Fdf</button>
      <button class="projects__buttons" @click="showProject('ProjectPushSwap')">PushSwap</button>
      <button class="projects__buttons" @click="showProject('ProjectMinitalk')">Minitalk</button>
      <button class="projects__buttons" @click="showProject('ProjectMinishell')">Minishell</button>
      <button class="projects__buttons" @click="showProject('ProjectPhilosophers')">Philosophers</button>
    </div>
    <div class="back" v-else>
      <button class="back__button" @click="showProject(null)">Back</button>
    </div>
    <div class="details">
      <ProjectFdf v-if="currentProject === 'ProjectFdf'" />
      <ProjectPushSwap v-if="currentProject === 'ProjectPushSwap'" />
      <ProjectMinitalk v-if="currentProject === 'ProjectMinitalk'" />
      <ProjectMinishell v-if="currentProject === 'ProjectMinishell'" />
      <ProjectPhilosophers v-if="currentProject === 'ProjectPhilosophers'" />
    </div> 
  </div>
</template>
  
<script>
import ProjectFdf from '../projects/ProjectFdf.vue';
import ProjectPushSwap from '../projects/ProjectPushSwap.vue';
import ProjectMinitalk from '../projects/ProjectMinitalk.vue';
import ProjectMinishell from '../projects/ProjectMinishell.vue';
import ProjectPhilosophers from '../projects/ProjectPhilosophers.vue';

export default {
  components: {
    ProjectFdf,
    ProjectPushSwap,
    ProjectMinitalk,
    ProjectMinishell,
    ProjectPhilosophers,
  },
  data() {
    return {
      currentProject: null,
    };
  },
  methods: {
    showProject(projectName) {
      if (this.currentProject === projectName) {
        this.currentProject = null;
      } else {
        this.currentProject = projectName;
      }
    },
  },
};
</script>
  