<script setup lang="ts">
import { vanillaStoreInstanceBeta } from '@/stores/vanillaVueStore'

const handleNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  console.log('New name:', target.value)
  vanillaStoreInstanceBeta.setName(target.value)
}
</script>

<template>
  <h2>Vanilla Store Beta</h2>
  <div>
    <p>Count: {{ vanillaStoreInstanceBeta.count }}</p>
    <button @click="vanillaStoreInstanceBeta.increment()">Increment</button>
  </div>
  <div>
    <p>{{ vanillaStoreInstanceBeta.name }}</p>
    <p>
      disadvantage of not exposing reactive values is we lose the v-modal functionality and have to
      manually manage the state
    </p>
    <input type="text" v-bind:value="vanillaStoreInstanceBeta.name" v-on:input="handleNameChange" />
  </div>
</template>
