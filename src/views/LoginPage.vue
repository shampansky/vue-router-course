<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const name = ref('')
const password = ref('')

const router = useRouter()
const route = useRoute()

const submit = () => {
  window.user = name.value
  const redirectPath = String(route.query.redirect) || '/protected'
  router.push(redirectPath)
}
</script>

<template>
  <div class="login">
    <form class="form" @submit.prevent="submit">
      <h1>login</h1>
      <label for="username">Username</label>
      <input v-model="name" name="username" id="username" type="text" class="input">
      <label for="password">Password</label>
      <input v-model="password" id="password" type="text" class="input">
      <button type="submit" class="btn">Login</button>
    </form>
  </div>
</template>
