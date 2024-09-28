<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const username = window.user

const logout = () => {
  window.user = null
  router.push({ name: 'Home' })
}
</script>

<template>
  <div>
    <h1>Hello, {{ username }}</h1>
    <button @click="logout">Logout</button>
    <RouterLink :to="{ name: 'invoices' }">
      <button>Invoices</button>
    </RouterLink>
  </div>
</template>