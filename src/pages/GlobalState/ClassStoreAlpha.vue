<script setup lang="ts">
import { classStoreInstanceAlpha } from '@/stores/classVueStore'

const handleNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  console.log('New name:', target.value)
  classStoreInstanceAlpha.setName(target.value)
}
</script>

<template>
  <h2>Vanilla Store Alpha</h2>
  <div>
    <p>Count: {{ classStoreInstanceAlpha.count }}</p>
    <button @click="classStoreInstanceAlpha.increment()">Increment</button>
  </div>
  <div>
    <p>{{ classStoreInstanceAlpha.name }}</p>
    <p>
      disadvantage of not exposing reactive values is we lose the v-modal functionality and have to
      manually manage the state
    </p>
    <input type="text" v-bind:value="classStoreInstanceAlpha.name" v-on:input="handleNameChange" />
  </div>
</template>
