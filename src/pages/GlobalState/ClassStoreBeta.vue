<script setup lang="ts">
import { classStoreInstanceBeta } from '@/stores/classVueStore'

const handleNameChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  classStoreInstanceBeta.setName(target.value)
}
</script>

<template>
  <h2>Vanilla Store Beta</h2>
  <div>
    <p>Count: {{ classStoreInstanceBeta.count }}</p>
    <button @click="classStoreInstanceBeta.increment()">Increment</button>
  </div>
  <div>
    <p>{{ classStoreInstanceBeta.name }}</p>
    <p>
      disadvantage of not exposing reactive values is we lose the v-modal functionality and have to
      manually manage the state
    </p>
    <input type="text" v-bind:value="classStoreInstanceBeta.name" v-on:input="handleNameChange" />
  </div>
</template>
