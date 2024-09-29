<script setup>
import { RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
  ...RouterLink.props,
})

const isExternal = computed(() => {
  return typeof props.to === 'string' && props.to.includes('http')
})
</script>

<template>
  <a v-if="isExternal" :href="to" class="external-link" target="_blank" rel="noopener"><slot /></a>
  <RouterLink v-else v-bind="$props" class="internal-link"><slot /></RouterLink>
</template>
