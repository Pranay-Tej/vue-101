<script setup lang="ts">
import { useTemplateRef, watchEffect } from 'vue'

const props = defineProps<{
  open: boolean
}>()

const emits = defineEmits<{
  (e: 'close'): void
}>()

const dialogEl = useTemplateRef('dialog')

watchEffect(() => {
  if (props.open) {
    dialogEl.value?.showModal()
  } else {
    dialogEl.value?.close()
  }
})

const handleClose = () => {
  dialogEl.value?.close()
  emits('close')
}
</script>

<template>
  <dialog ref="dialog" @close="handleClose" @cancel="handleClose">
    <slot v-if="$slots.title" name="title"> </slot>
    <slot v-if="$slots.content" name="content"> </slot>
    <slot v-if="$slots.actions" name="actions"> </slot>
  </dialog>
</template>

<style>
dialog::backdrop {
  backdrop-filter: blur(5px);
}
</style>
