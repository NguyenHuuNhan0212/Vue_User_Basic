import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export const useTodoStore = defineStore('todos', () => {
    const route = useRoute()
    const txtSearch = ref('')
    const users = ref([
        {
        id: '1',
        name: 'nineDev',
        email: 'niveDev@gmail.com',
        phone: '123456',
        },
         {
        id: '2',
        name: 'Nguyen Huu Nhan',
        email: 'nhanDev@gmail.com',
        phone: '123456',
        },

])
    const handleChangeTxtSearch = (value) => {
        txtSearch.value = value
    }
    const detailUser = computed(() => {
        return users.value.find(item => item.id === route.params.id)
    })
    const filterUsers = computed( () => {
        return users.value.filter(
            item => item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1 || 
            item.email.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1);
    })
    const handleCreateUser = (body) => {
        users.value.push(body)
    }
    const handleDeleteUser= (id) => {
        users.value = users.value.filter(item => item.id !== id)
    }
    const  handleUpdateUser = (body) => {
        const index = users.value.findIndex(item => body.id === item.id)
        if(index !== -1){
            users.value[index].email = body.email
            users.value[index].name = body.name
            users.value[index].phone = body.phone
        }
    }
    return { users , handleUpdateUser, handleDeleteUser, handleCreateUser, detailUser, txtSearch, handleChangeTxtSearch, filterUsers }
});