<script setup>
import { useTodoStore } from '@/store/TodoStore'
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const store = useTodoStore()

const router = useRouter()
// onMounted(() => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => users.value = json)
//   })


</script>

<template>
  <main style="color: #000; padding: 2rem">
    <input type="text" 
    @input="event => store.handleChangeTxtSearch(event.target.value)" placeholder="Enter Search Here!">
    <div class="group-card">
      <div class="card-item" v-for=" user in store.filterUsers">
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
