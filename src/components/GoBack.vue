<template>
  <span class="go-back">
    <button @click="router.back()">go back</button>
  </span>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>