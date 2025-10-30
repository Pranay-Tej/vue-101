<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink to="/" active-class="active-link">Home</RouterLink>
    <RouterLink to="/performance" active-class="active-link">Performance</RouterLink>
    <RouterLink to="/crud" active-class="active-link">CRUD</RouterLink>
    <RouterLink to="/ui-elements" active-class="active-link">UI Elements</RouterLink>
    <RouterLink to="/global-state" active-class="active-link">Global Vanilla State</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

nav a {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
}

nav .active-link {
  background-color: hsl(234, 68%, 60%);
  color: white;
}
</style>
