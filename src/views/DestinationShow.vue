<template>
<section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
</section>
  <section class="experiences">
    <h2>Top experiences in {{ destination.name }}</h2>
    <div class="cards">
      <RouterLink
        :to="{name: 'experience.card', params: {experienceSlug: experience.slug}}"
        v-for="experience in destination.experiences"
        :key="experience.slug"
      >
        <ExperienceCard :experience="experience" />
      </RouterLink>
    </div>

    <RouterView />

  </section>
</template>

<script setup>
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue'
// import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  id: {
    type: Number,
    required: true,
  }
})

// const route = useRoute()

const destination = computed(() => {
  return sourceData.destinations.find(d => d.id === props.id)
})

// const initData = async () => {
//   const res = await fetch(`https://travel-dummy-api.netlify.app/${props.id}.json`)
//   destination.value = await res.json()
// }

// onBeforeMount(initData)
</script>
