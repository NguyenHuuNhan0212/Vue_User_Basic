<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useTodoStore } from '@/store/TodoStore'
const store = useTodoStore()
const route = useRoute()
const router = useRouter()
const userData = reactive({
    email: route.params.id ? store.detailUser.email: '',
    phone: route.params.id ? store.detailUser.phone: '',
    name: route.params.id ? store.detailUser.name: '',
})

const handleCreateNewData = () => {
    store.handleCreateUser({id:String(Math.random()) ,...userData})
    router.push('/')
}
const handleUpdateData = () => {
    store.handleUpdateUser({id:route.params.id ,...userData})
    router.push('/')
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
        <label for="">Phone:</label>
        <input type="text" placeholder="Enter Phone Here!" v-model="userData.phone">
      </div>
      <div style="display: flex;" @click="route.params.id ? handleUpdateData() : handleCreateNewData()">
        <div class="btn-main" style="margin-top: 1rem; border-radius:50px;"> {{ route.params.id ? 'Update' : 'Create' }}</div>
      </div>
      
    </main>
</template>
