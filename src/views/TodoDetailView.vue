<script setup>
import { useTodoStore } from '@/store/TodoStore'
import { useRoute, useRouter } from 'vue-router'
const store = useTodoStore()
const route = useRoute()
const router = useRouter()
const handleRedirectDelete = (id) => {
    store.handleDeleteUser(id)
    router.push('/')
}
</script>
<template>
    <main style="color: #000; padding: 2rem;">
        <div class="card-item">
            <h2>Email: {{ store.detailUser.email }}</h2>
            <h3>Name: {{ store.detailUser.name }}</h3>
            <h4>Phone: {{ store.detailUser.phone }}</h4>
        </div>
        <div style="display: flex; column-gap: 1rem;" >
                <div style="margin-top: 1rem" class="btn-main" @click="handleRedirectDelete(route.params.id)">
                    Delete
                </div>
                 <div style="margin-top: 1rem" class="btn-main" @click="router.push({path: `/create/${store.detailUser.id}`})">
                    Update
                </div>
        </div>
        
    </main>
</template>