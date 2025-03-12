import { defineStore } from 'pinia'

interface User {
    id: String;
    username: String;
    role: String;
    name: String;
}

interface LoginCredentials {
    username: String;
    password: String;
    role: String;
}

interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: Boolean;
}

const MOCK_USERS = [
    {
        id: '1',
        username: 'teacher1',
        password: 'password123',
        role: 'teacher',
        name: 'Иван Петрович'
    },
    {
        id: '2',
        username: 'student1',
        password: 'password123',
        role: 'student',
        name: 'Анна Иванова'
    }
];


export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
        user: null,
        token: null,
        isAuthenticated: false
    }),

    getters: {
        isTeacher: (state) => state.user?.role === 'teacher',

        isStudent: (state) => state.user?.role === 'student',

        userName: (state) => state.user?.name || ''
    }
})