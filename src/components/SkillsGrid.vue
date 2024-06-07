<template>
  <div class="skills-grid">
    <h1>My Skills</h1>
    <div class="grid">
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
        { name: 'Raspberry Pi', icon: 'fab fa-raspberry-pi' } // Note: Replace with actual Raspberry Pi icon if available
        // Add more skills as needed
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
