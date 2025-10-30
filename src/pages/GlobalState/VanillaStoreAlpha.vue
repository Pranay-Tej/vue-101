<script setup lang="ts">
import { vanillaStoreInstanceAlpha } from '@/stores/vanillaVueStore'

const handleNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  console.log('New name:', target.value)
  vanillaStoreInstanceAlpha.setName(target.value)
}
</script>

<template>
  <h2>Vanilla Store Alpha</h2>
  <div>
    <p>Count: {{ vanillaStoreInstanceAlpha.count }}</p>
    <button @click="vanillaStoreInstanceAlpha.increment()">Increment</button>
  </div>
  <div>
    <p>{{ vanillaStoreInstanceAlpha.name }}</p>
    <p>
      disadvantage of not exposing reactive values is we lose the v-modal functionality and have to
      manually manage the state
    </p>
    <input
      type="text"
      v-bind:value="vanillaStoreInstanceAlpha.name"
      v-on:input="handleNameChange"
    />
  </div>
</template>
