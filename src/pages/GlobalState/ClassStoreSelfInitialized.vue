<script setup lang="ts">
import { ClassVueStore } from '@/stores/classVueStore'

const store = new ClassVueStore(200, 'peter')

const handleNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  store.setName(target.value)
}
</script>

<template>
  <div v-if="store">
    <h2>Vanilla Store Self Initialized</h2>
    <div>
      <p>Count: {{ store.count }}</p>
      <button @click="store.increment()">Increment</button>
    </div>
    <div>
      <p>{{ store.name }}</p>
      <p>
        disadvantage of not exposing reactive values is we lose the v-modal functionality and have
        to manually manage the state
      </p>
      <input type="text" v-bind:value="store.name" v-on:input="handleNameChange" />
    </div>
  </div>
</template>
