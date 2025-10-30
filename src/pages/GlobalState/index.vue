<script lang="ts" setup>
import VanillaStoreAlpha from './VanillaStoreAlpha.vue'
import VanillaStoreBeta from './VanillaStoreBeta.vue'
import VanillaStoreSelfInitialized from './VanillaStoreSelfInitialized.vue'

defineOptions({
  name: 'GlobalState',
})
</script>

<template>
  <h2>Global state</h2>
  <VanillaStoreAlpha />
  <VanillaStoreBeta />
  <VanillaStoreSelfInitialized />
</template>
