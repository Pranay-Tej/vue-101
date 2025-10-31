<script lang="ts" setup>
import ClassStoreAlpha from './ClassStoreAlpha.vue'
import ClassStoreBeta from './ClassStoreBeta.vue'
import ClassStoreComputed from './ClassStoreComputed.vue'
import ClassStorePropsConstructed from './ClassStorePropsConstructed.vue'
import ClassStoreSelfInitialized from './ClassStoreSelfInitialized.vue'

defineOptions({
  name: 'GlobalState',
})
</script>

<template>
  <h2>Global state</h2>
  <ClassStoreAlpha />
  <ClassStoreBeta />
  <ClassStoreSelfInitialized />
  <ClassStorePropsConstructed :initial-count="300" initial-name="bruce" />
  <ClassStoreComputed />
</template>
