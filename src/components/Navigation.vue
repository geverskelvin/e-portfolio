<template>
  <nav class="flex justify-between space-x-32">
    <div class="flex flex-row items-center">
      <h1 class="flex-1 pt-0">PropertyFi</h1>
    </div>
    <ul class="flex space-x-6">
      <li>
        <RouterLink class="align-middle" to="/">Home</RouterLink>
      </li>
      <!-- <li>
        <RouterLink class="align-middle" to="/buy-property">Buy Property</RouterLink>
      </li>
      <li>
        <RouterLink class="align-middle" to="/sell-property">Sell Property</RouterLink>
      </li> -->
      <li>
        <a class="align-middle" :href="openseaLink" target="”_blank”">View On Opensea</a>
      </li>
      <li>
        <RouterLink class="align-middle" to="/about">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { computed } from 'vue'
export default {
  setup() {
    const openseaLink = computed(() => {
      return 1
    })
    return { openseaLink }
  }
}
</script>
