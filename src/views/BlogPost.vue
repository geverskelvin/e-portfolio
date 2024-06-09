<template>
  <div class="flex flex-col items-center w-4/6 m-auto">
    <!-- <p>Post ID: {{ postId }}</p> -->
    <button
      type="button"
      @click.prevent="handleClick"
      class="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700 self-start"
    >
      <svg
        class="w-5 h-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      <span>Go back</span>
    </button>
    <h2 class="text-3xl mb-12">{{ post.title }}</h2>
    <img :src="post.img" alt="post image" class="w-96 h-96 mb-8" />
    <p class="mb-12">{{ post.content }}</p>
    <div id="blog_text"></div>
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
    console.log(postData)
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

<style scoped>
h1 {
  /* font-size: 2rem;
  margin-bottom: 1rem;
  color: red; */
}
/* Add your styles here */
</style>
