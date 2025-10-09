<script lang="ts" setup>
const props = defineProps<{
  count: number
}>()

const emits = defineEmits<{
  (e: 'change', value: number): void
}>()
</script>

<template>
  <div>
    <button @click="emits('change', props.count - 1)">-</button>
    <span>{{ props.count }}</span>
    <button @click="emits('change', props.count + 1)">+</button>
  </div>
</template>
