<script setup lang="ts">
import type { ListItem } from '@/models/app'
import { onMounted, onUnmounted, onUpdated } from 'vue'

const props = defineProps<{
  item: ListItem
  isSelected: boolean
}>()
onMounted(() => {
  console.log('Mounted:', props.item)
})
onUpdated(() => {
  console.log('Updated:', props.item)
})
onUnmounted(() => {
  console.log('Unmounted:', props.item)
})
</script>

<template>
  <li :class="{ selected: props.isSelected }">
    {{ props.item.text }}
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
