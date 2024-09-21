<script setup>
import { RouterView, useRoute } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
const route = useRoute()
</script>

<template>
  <TheNavigation />
  <div class="container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
