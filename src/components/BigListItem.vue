<script setup lang="ts">
import type { ListItem } from '@/models/app'
import { onMounted, onUnmounted, onUpdated } from 'vue'

const props = defineProps<{
  itemText: ListItem
  isSelected: boolean
}>()
onMounted(() => {
  console.log(`Mounted: ${props.itemText}`)
})
onUpdated(() => {
  console.log(`Updated: ${props.itemText}`)
})
onUnmounted(() => {
  console.log(`Unmounted: ${props.itemText}`)
})
</script>

<template>
  <li :class="{ selected: props.isSelected }">
    {{ props.itemText.text }}
  </li>
</template>

<style scoped>
li {
  cursor: pointer;
  padding: 5px 10px;
}
.selected {
  background-color: lightblue;
}
</style>
