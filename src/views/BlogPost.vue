<template>
  <div>
    <p>Post ID: {{ postId }}</p>
    <h1>{{ post.title }}</h1>
    <img :src="post.img" alt="post image" />
    <p class="mb-12">{{ post.content }}</p>
    <button
      @click.prevent="handleClick"
      class="bg-slate-300 border border-black p-1 hover:bg-transparent"
    >
      Go Back
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const postId = ref(null)
const post = ref({})

onMounted(async () => {
  postId.value = route.params.id

  try {
    const postData = await import(`@/data/posts/${postId.value}.json`)
    post.value = postData.default
  } catch (error) {
    console.error(`Could not load post data: ${postId.value}`, error)
    post.value = { title: 'Post not found', content: '', img: '' }
  }
})

const handleClick = () => {
  // navigate to home page
  router.push('/')
}
</script>

<style>
/* Add your styles here */
</style>
