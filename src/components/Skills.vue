<template>
  <div class="flex justify-around mx-auto w-4/5">
    <SkillsGrid />
    <Expertise />
  </div>
</template>

<script>
import SkillsGrid from '@/components/SkillsGrid.vue'
import Expertise from '@/components/Expertise.vue'

export default {
  name: 'Skills',
  components: {
    SkillsGrid,
    Expertise
  }
}
</script>

<style scoped>
/* .skills {
  margin: 0 auto;
  width: 80%;
} */
</style>
