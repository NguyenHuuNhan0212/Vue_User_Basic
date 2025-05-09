<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
  <header>
    <img src="@/assets/logo.svg" width="60px" height="60px" alt="Vue logo" class="logo" />
    <nav>
      <RouterLink to="/">
        <div class="btn-main">
          Home
        </div>
      </RouterLink>
      <RouterLink to="/create">
        <div class="btn-action">
          Create
        </div>
      </RouterLink>
    </nav>
  </header>
  <router-view/>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 2rem;
  align-items: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}
nav {
  display: flex;
  column-gap: 1rem;
}
</style>
