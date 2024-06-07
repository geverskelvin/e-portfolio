<template>
  <div class="about">
    <h1>About Me</h1>
    <p class="intro">
      Hello! I'm <strong>{{ name }}</strong
      >, a passionate Blockchain and AI Engineer. I am constantly eager to learn and explore new
      technologies to push the boundaries of what is possible.
    </p>

    <section class="background">
      <h2>Background</h2>
      <p>
        I have a diverse background in computer science with a strong focus on blockchain technology
        and artificial intelligence. My journey started with a deep curiosity about how things work
        and a desire to create innovative solutions to real-world problems.
      </p>
    </section>

    <section class="expertise">
      <h2>Expertise</h2>
      <ul>
        <li>Blockchain Development</li>
        <li>Smart Contract Design</li>
        <li>Artificial Intelligence & Machine Learning</li>
        <li>Decentralized Applications (DApps)</li>
        <li>Data Science</li>
      </ul>
    </section>

    <section class="values">
      <h2>Core Values</h2>
      <ul>
        <li>Innovation</li>
        <li>Continuous Learning</li>
        <li>Integrity</li>
        <li>Collaboration</li>
        <li>Excellence</li>
      </ul>
    </section>

    <section class="goals">
      <h2>Vision & Goals</h2>
      <p>
        My vision is to leverage blockchain and AI technologies to create secure, efficient, and
        intelligent systems that can transform industries. I am committed to staying at the
        forefront of technological advancements and contributing to the community through
        open-source projects and knowledge sharing.
      </p>
    </section>

    <section class="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me for collaborations, discussions, or just to say hi!</p>
      <ul>
        <li>
          Email: <a :href="'mailto:' + email">{{ email }}</a>
        </li>
        <li>
          LinkedIn: <a :href="linkedin" target="_blank">{{ linkedin }}</a>
        </li>
        <li>
          GitHub: <a :href="github" target="_blank">{{ github }}</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'About',
  setup() {
    const name = ref('Your Name')
    const email = ref('your.email@example.com')
    const linkedin = ref('https://www.linkedin.com/in/your-profile')
    const github = ref('https://github.com/your-profile')

    return {
      name,
      email,
      linkedin,
      github
    }
  }
}
</script>

<style scoped>
.about {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1,
h2 {
  color: #2c3e50;
}

p {
  line-height: 1.6;
}

.intro {
  font-size: 1.2em;
  margin-bottom: 20px;
}

section {
  margin-bottom: 20px;
}

ul {
  list-style-type: disc;
  margin-left: 20px;
}

a {
  color: #3498db;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
