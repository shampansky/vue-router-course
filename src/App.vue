<script setup>
import { RouterView, useRoute } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue'
const route = useRoute()
</script>

<template>
  <TheNavigation />
  <div class="container">
    <RouterView v-slot="{ Component }" class="view left-sidebar" name="LeftSidebar">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
    <RouterView v-slot="{ Component }" class="main-view">
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

.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}
</style>
