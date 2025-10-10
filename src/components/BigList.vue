<script setup lang="ts">
import { ref } from 'vue'
import BigListItem from './BigListItem.vue'
import type { ListItem } from '@/models/app'

const items = ref<ListItem[]>(
  Array.from({ length: 100 }, (_, i) => {
    return {
      id: i,
      text: `Item ${i + 1}`,
    }
  }),
)
const selectedItem = ref<number | null>(null)
</script>

<template>
  <p>v-memo is required for optimization</p>
  <ul>
    <BigListItem
      v-for="item in items"
      :key="item.id"
      :itemText="item"
      :isSelected="item.id === selectedItem"
      v-memo="[item, item.id === selectedItem]"
      @click="selectedItem = item.id"
    />
  </ul>
</template>
