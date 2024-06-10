<template>
  <div class="about">
    <h1 class="text-5xl mb-24 text-center text-slate-600">About Me</h1>
    <IntroductionText />
    <Skills />
    <div class="mt-4">
      <Socials />
    </div>
  </div>
</template>

<script setup>
import IntroductionText from '@/components/IntroductionText.vue'
import Skills from '@/components/Skills.vue'
import Socials from '@/components/Socials.vue'
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
