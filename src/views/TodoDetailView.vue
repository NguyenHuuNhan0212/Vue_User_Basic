<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const user = ref(null)
onMounted(() => {
  fetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
      .then(response => response.json())
      .then(json => user.value = json)
  })
</script>
<template>
    <main style="color: #000; padding: 2rem;">
        <div class="card-item">
            <h2>Email: {{ user?.email }}</h2>
            <h3>Name: {{ user?.name }}</h3>
            <h4>Phone: {{ user?.phone }}</h4>
            <h5>Username: {{ user?.username }}</h5>
            <h5><i>Website: {{ user?.website }}</i></h5>
        </div>
    </main>
</template>