<script setup>
import { reactive } from 'vue'
const userData = reactive({
    email: '',
    phone: '',
    name: '',
    website: '',
})

const handleCreateNewData = async () => {
    console.log(userData)
}
</script>
<template>
    <main style="color: #000; padding: 2rem">
      <h1 style="font-weight: bold; text-align: center;;">Create User</h1>  
      <div style="margin-top: 1rem;">
        <label for="">Email:</label>
        <input type="text" placeholder="Enter Email Here!" v-model="userData.email">
      </div>
      <div style="margin-top: 1rem;">
        <label for="">Name:</label>
        <input type="text" placeholder="Enter Name Here!" v-model="userData.name">
      </div>
      <div style="margin-top: 1rem;">
        <label for="">Website:</label>
        <input type="text" placeholder="Enter Website Here!" v-model="userData.website">
      </div>
      <div style="margin-top: 1rem;">
        <label for="">Phone:</label>
        <input type="text" placeholder="Enter Phone Here!" v-model="userData.phone">
      </div>
      <div style="display: flex;" @click="handleCreateNewData">
        <div class="btn-main" style="margin-top: 1rem; border-radius:50px;"> Create new</div>
      </div>
      
    </main>
</template>
