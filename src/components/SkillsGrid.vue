<template>
  <div class="">
    <h2 class="text-2xl text-center mb-4">Skills</h2>
    <div class="flex flex-wrap">
      <div v-for="skill in skills" :key="skill.name" class="skill">
        <i :class="skill.icon" class="skill-icon"></i>
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
        { name: 'SQL', icon: 'fas fa-database' } // Using a database icon as placeholder
      ]
    }
  }
}
</script>

<style scoped>
.skills-grid {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
}

.skill-icon {
  font-size: 48px;
  color: #3498db;
  margin-bottom: 10px;
}

.skill p {
  margin: 0;
  font-size: 1em;
}
</style>
