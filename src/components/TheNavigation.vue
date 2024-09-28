<template>
  <div id="nav">
    <RouterLink to="/" id="logo">Travel blog</RouterLink>
    <RouterLink
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: {
          id: destination.id,
          slug: destination.slug,
        }
    }">
      {{ destination.name }}
    </RouterLink>
    <RouterLink :to="{ name: 'protected' }">Dashboard</RouterLink>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'

const { destinations } = sourceData
</script>

<style lang="css">
#nav .active-link {
  color: #000;
}
</style>
