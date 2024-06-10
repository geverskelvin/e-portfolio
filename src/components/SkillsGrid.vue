<template>
  <div>
    <h2 class="text-3xl text-center mb-4 w-5/12">Skills</h2>
    <div class="flex flex-wrap w-5/12">
      <div v-for="skill in skills" :key="skill.name" class="skill mb-6">
        <i :class="skill.icon" class="skill-icon text-slate-500"></i>
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsGrid',
  data() {
    return {
      skills: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'Raspberry Pi', icon: 'fab fa-raspberry-pi' },
        { name: 'Solidity', icon: 'fas fa-file-code' }, // Using a generic code icon as placeholder
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'SQL', icon: 'fa fa-database' }, // Using a database icon as placeholder
        { name: 'Github', icon: 'fab fa-github' },
        { name: 'Vue', icon: 'fab fa-vuejs' },
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Docker', icon: 'fab fa-docker' }
      ]
    }
  }
}
</script>

<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

.skill-icon {
  font-size: 48px;
  margin-bottom: 10px;
}

.skill p {
  margin: 0;
  font-size: 1em;
}
</style>
