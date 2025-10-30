<script setup lang="ts">
import { ref } from 'vue'
import type { ListItem } from '@/models/app'
import BigListItemUnoptimized from './BigListItemUnoptimized.vue'

const items = ref<ListItem[]>(
  Array.from({ length: 10 }, (_, i) => {
    return {
      id: i,
      text: `Item ${i + 1}`,
    }
  }),
)
const selectedItem = ref<number | null>(null)
</script>

<template>
  <h2>Big List unoptimized</h2>
  <p>
    NOTE!!: using an implicit @click="selectedItem.value = item.id" will result in re-render every
    time, even if the props never changes
  </p>
  <p>an explicit v-memo is required in this case (NOT recommended)</p>
  <p>v-memo="[item, item.id === selectedItem]"</p>
  <ul>
    <BigListItemUnoptimized
      v-for="item in items"
      :key="item.id"
      :item="item"
      :isSelected="item.id === selectedItem"
      @click="selectedItem = item.id"
    />
  </ul>
</template>
