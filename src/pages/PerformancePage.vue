<script setup lang="ts">
import BigList from '@/components/BigList.vue'
import TheCounter from '@/components/TheCounter.vue'
import TheInput from '@/components/TheInput.vue'
import { ref } from 'vue'

const count = ref(0)
const textValue = ref('')

const handleCountChange = (value: number) => {
  count.value = value
}
</script>

<template>
  <div id="performance-page">
    <h1>Performance</h1>
    <h2>Counter</h2>
    <TheCounter :count="count" @change="handleCountChange" />
    <h2>Two-way input</h2>
    <TheInput v-model="textValue" />
  </div>
  <h2>Big list</h2>
  <BigList />
</template>

<style scoped>
#performance-page {
  border: 1px dashed hsl(0, 50%, 10%);
}
</style>
