<script setup lang="ts">
import TheModal from '@/components/TheModal.vue'
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <h1>UI Elements</h1>
  <button @click="open = true">Open Modal</button>
  <TheModal :open="open" @close="open = false">
    <template #title>
      <h2>Modal Title</h2>
    </template>
    <template #content>
      <p>This is the content of the modal.</p>
    </template>
    <template #actions>
      <button @click="open = false">Close</button>
    </template>
  </TheModal>
</template>
