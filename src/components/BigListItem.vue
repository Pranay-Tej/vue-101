<script setup lang="ts">
import { onMounted, onUnmounted, onUpdated } from 'vue'

const props = defineProps<{
  itemText: string
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
    {{ props.itemText }}
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
