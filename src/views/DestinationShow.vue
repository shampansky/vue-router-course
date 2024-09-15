<template>
<section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
</section>
</template>

<script setup>
// import sourceData from '@/data.json'
import { useRoute } from 'vue-router'
import { ref, onBeforeMount } from 'vue'
const route = useRoute()

const destination = ref(null)

const initData = async () => {
  const res = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
  destination.value = await res.json()
}

onBeforeMount(initData)
</script>
