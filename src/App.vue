<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <header class="bg-slate-400 flex justify-between mb-4 p-4 text-4xl">
    <Navigation />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
