<script setup lang="ts">
import { VanillaVueStoreWithClass } from '@/stores/vanillaVueStore'
import { onMounted, ref } from 'vue'

let vanillaStore: VanillaVueStoreWithClass
const triggerRender = ref(0)

const handleNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  console.log('New name:', target.value)
  vanillaStore?.setName(target.value)
}

onMounted(() => {
  vanillaStore = new VanillaVueStoreWithClass(200, 'peter')
  triggerRender.value++
})
</script>

<template>
  <div v-if="vanillaStore">
    <p>{{ triggerRender }}</p>
    <h2>Vanilla Store Self Initialized (DOES NOT WORK!!)</h2>
    <div>
      <p>Count: {{ vanillaStore?.count }}</p>
      <button @click="vanillaStore?.increment()">Increment</button>
    </div>
    <div>
      <p>{{ vanillaStore?.name }}</p>
      <p>
        disadvantage of not exposing reactive values is we lose the v-modal functionality and have
        to manually manage the state
      </p>
      <input type="text" v-bind:value="vanillaStore?.name" v-on:input="handleNameChange" />
    </div>
  </div>
</template>
