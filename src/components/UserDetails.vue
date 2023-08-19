<template>
  <Transition name="slide-up" mode="out-in">
    <div class="flex flex-col text-center p-4" :key="details.title">
      <span class="text-xl font-base">
        {{ details.title }}
      </span>
      <strong v-if="details.info" class="text-3xl font-bold">{{ details.info }}</strong>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useRandomizerStore } from '@stores/randomizer'
import { storeToRefs } from 'pinia'

const { details } = storeToRefs(useRandomizerStore())
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
