<template>
  <h1 class="text-3xl mb-24 text-center">Blog Posts</h1>
  <div class="flex flex-wrap justify-start">
    <article
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="flex flex-col bg-slate-200 text-center mb-24 inline-block p-8 shadow-xl w-96 m-auto items-center"
    >
      <!-- <p>{{ post.id }}</p> -->
      <h2 class="text-3xl mb-2">{{ post.title }}</h2>
      <!-- <p class="mb-10">{{ post.img }}</p> -->
      <img :src="post.img" alt="post image" class="w-96 mb-10" />
      <!-- <img src="@/assets/blogpost_images/hackathon.jpg" alt="post image" class="mb-10" /> -->
      <!-- <p>{{ post.content }}</p> -->
      <button
        @click.prevent="handleClick(post.id)"
        class="bg-green-200 border border-black hover:bg-transparent p-1"
      >
        Go To Post
      </button>
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

const posts = ref([post1, post2, post3, post4, post5])
const router = useRouter()

const handleClick = (id) => {
  console.log('clicked ' + id)

  // navigate to post page
  router.push(`/posts/${id}`)
}
</script>

<style></style>
