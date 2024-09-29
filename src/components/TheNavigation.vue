<template>
  <div id="nav">
    <AppLink to="/" id="logo">Travel blog</AppLink>
    <AppLink
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
    </AppLink>
    <AppLink :to="{ name: 'protected' }">Dashboard</AppLink>
    <AppLink to="https://ya.ru">External Link</AppLink>
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
