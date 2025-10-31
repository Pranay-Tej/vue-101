<script setup lang="ts">
import { ClassVueStore } from '@/stores/classVueStore'

const props = defineProps<{ initialCount: number; initialName: string }>()

const store = new ClassVueStore(props.initialCount, props.initialName)

console.log('Store initialized with props:', store.name)

const handleNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  store.setName(target.value)
}
</script>

<template>
  <div v-if="store">
    <h2>Vanilla Store Props Constructed</h2>
    <div>
      <p>Count: {{ store.count }}</p>
      <p>DoubleCountComputed: {{ store.doubleCountComputed }}</p>
      <p>DoubleCountComputed: {{ store.doubleCountComputed }}</p>
      <p>DoubleCountGet: {{ store.doubleCountGet }}</p>
      <p>DoubleCountGet: {{ store.doubleCountGet }}</p>
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
