<template>
  <h1 class="text-5xl mb-24 text-center text-slate-600">Blog Posts</h1>
  <div class="flex flex-wrap">
    <article
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :style="{ backgroundImage: `url(${post.img})` }"
      class="h-96 flex flex-col mb-24 shadow-xl w-96 m-auto bg-cover bg-center bg-no-repeat border-slate-300 hover:border-black border-4 hover:shadow-2xl cursor-pointer hover:opacity-50 transition-all duration-300 ease-in-out"
      @click.prevent="handleClick(post.id)"
    >
      <section class="flex justify-between mb-2">
        <p class="bg-slate-300 font-medium p-1">{{ post.tag }}</p>
        <p class="bg-slate-300 font-medium p-1">{{ post.date }}</p>
      </section>
      <!-- <section class="flex flex-col justify-end relative"> -->
      <h2 class="bg-slate-500 bg-opacity-50 text-3xl m-2 font-medium text-white text-center mb-24">
        {{ post.title }}
      </h2>
      <p class="bg-slate-500 bg-opacity-50 text-white m-1 text-center text-2xl font-medium">
        {{ post.description }}
      </p>
      <!-- </section> -->
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import post1 from '@/data/posts/1.json'
import post2 from '@/data/posts/2.json'
import post3 from '@/data/posts/3.json'
import post4 from '@/data/posts/4.json'
import post5 from '@/data/posts/5.json'
import post6 from '@/data/posts/6.json'

const posts = ref([post1, post2, post3, post4, post5, post6])
const router = useRouter()

const handleClick = (id) => {
  console.log('clicked ' + id)

  // navigate to post page
  router.push(`/posts/${id}`)
}
</script>

<style scoped>
img {
  width: 200px;
  height: 400px;
  overflow: hidden;
  /* max-width: 100%; */
  /* height: auto; */
}
</style>
