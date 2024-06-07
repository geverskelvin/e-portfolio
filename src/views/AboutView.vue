<template>
  <div class="about">
    <h1>This is an about page</h1>
    <IntroductionText />
    <SkillsGrid />
    <About />
  </div>
</template>

<script setup>
import SkillsGrid from '@/components/SkillsGrid.vue'
import IntroductionText from '@/components/IntroductionText.vue'
import About from '@/components/About.vue'
</script>
<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
