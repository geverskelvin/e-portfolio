<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <header class="bg-slate-100 flex justify-between mb-16 p-2 text-3xl">
    <Navigation />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
