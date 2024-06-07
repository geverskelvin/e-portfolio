<template>
  <div class="about">
    <h1 class="text-3xl mb-24 text-center">About Me</h1>
    <IntroductionText />
    <Skills />
    <p class="text-3xl text-center">cv</p>
    <p class="text-3xl text-center">linkedin</p>
  </div>
</template>

<script setup>
import IntroductionText from '@/components/IntroductionText.vue'
import Skills from '@/components/Skills.vue'
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
