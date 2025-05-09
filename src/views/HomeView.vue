<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
const users = ref([])
const txtSearch = ref('')
const router = useRouter()
onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => users.value = json)
  })

const filterUsers = computed( () => {
  return users.value.filter(item => item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 || 
  item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1);
})
</script>

<template>
  <main style="color: #000; padding: 2rem">
    <input type="text" v-model="txtSearch" placeholder="Enter Search Here!">
    <div class="group-card">
      <div class="card-item" v-for=" user in filterUsers">
        <div @click="router.push({path: `/todo/${user?.id}`})">
          <h2>{{ user.name }}</h2>
          <i>{{ user.email }}</i>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
</style>
