<script setup lang="ts">
import type { Post } from '@/models/app'
import axios from 'axios'
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'ApiCrudPage',
})

const posts = ref<Post[]>([])
const editingPost = ref<Post | null>(null)

onMounted(() => {
  fetchPosts()
})

const fetchPosts = async () => {
  const res = await axios.get('http://localhost:3001/posts')
  posts.value = res.data
}

const deletePost = async (postId: string) => {
  await axios.delete(`http://localhost:3001/posts/${postId}`)
  fetchPosts()
}

const initiateCreatePost = () => {
  editingPost.value = { id: '', title: '', views: 0 }
}

const setEditingPost = (post: Post) => {
  editingPost.value = { ...post }
}

const handleSubmit = async () => {
  if (!editingPost.value) return

  if (editingPost.value.id) {
    const res = await axios.put(
      `http://localhost:3001/posts/${editingPost.value.id}`,
      editingPost.value,
    )
    if (res.status === 200) {
      editingPost.value = null
      fetchPosts()
      return
    }
    return
  }

  const res = await axios.post('http://localhost:3001/posts', {
    title: editingPost.value.title,
    views: 0,
  })
  if (res.status === 201) {
    editingPost.value = null
    fetchPosts()
    return
  }
}
</script>

<template>
  <h1>CRUD</h1>
  <button @click="initiateCreatePost">Create new</button>

  <form v-if="editingPost !== null" @submit.prevent="handleSubmit">
    <input required type="text" v-model="editingPost.title" />
    <button type="button" @click="editingPost = null">Cancel</button>
    <button>Save</button>
  </form>

  <ul>
    <li v-for="post in posts" :key="post.id">
      <span>
        {{ post.title }}
      </span>
      <span> ({{ post.views }} views)</span>
      <button @click="() => setEditingPost(post)">📝</button>
      <button @click="() => deletePost(post.id)">❌</button>
    </li>
  </ul>
</template>
