<template>
  <div class="home">
    <h1>All Destinations</h1>
    <button @click="triggerRouterError">Trigger Router Error</button>
    <div class="destinations">
      <RouterLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{
        name: 'destination.show',
        params: {
          id: destination.id,
          slug: destination.slug
        }
      }">
        <h2>{{ destination.name }}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import sourceData from '@/data.json'
import { useRouter, isNavigationFailure, NavigationFailureType } from 'vue-router'

const { destinations } = sourceData
const router = useRouter()

const triggerRouterError = async () => {
  const navigationFailure = await router.push('/')
  if (isNavigationFailure(navigationFailure, NavigationFailureType.duplicated)) {
    // things went wrong
    console.log(navigationFailure.to)
    console.log(navigationFailure.from)
  } else {
    // all is well
  }
}
</script>
