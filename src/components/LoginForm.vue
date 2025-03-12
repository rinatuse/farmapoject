<template>
    <div class="login-container">
        <div class="login-card">
            <h1>Вход в систему</h1>

            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="username">Имя пользователья:</label>
                    <InputText 
                        id="username"
                        v-model="username"
                        class="p-inputtext-lg"
                        :class="{'p-invalid': submitted && !username}"
                    />
                    <small v-if="submitted && !username" class="p-error">Имя пользователя обязательно</small>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

interface Role {
    id: string;
    name: string;
}

  
const username = ref('')
const password = ref('')
const selectedRole = ref<Role | null>(null)
const submitted = ref(false)
const loading = ref(false)
const errorMessage = ref('')
const roles = ref<Role[]>([
    {id: 'teacher', name: 'Учитель'},
    {id: 'student', name: 'Ученик'}
])

const handleLogin = async () => {
    submitted.value = true;

    if (!username.value || !password.value || !selectedRole.value) {
        return
    }

    try {
        loading.value = true;

        
    } catch {

    }
}
    

</script>
<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.login-card {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
}

.form-group {
    margin-bottom: 1.5rem;
}
</style>