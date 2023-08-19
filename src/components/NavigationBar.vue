<template>
  <nav class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-2 p-4">
    <button
      v-for="option in Object.keys(EUserDetails)"
      class="bg-neutral-900 text-neutral-300 capitalize text-center p-2 rounded-full col-span-2 hover:text-green-600 hover:bg-opacity-90 transition-all duration-500"
      :key="option"
      @mouseover="updateDetails(option)"
    >
      {{ option }}
    </button>
  </nav>
</template>

<script setup lang="ts">
import { useRandomizerStore } from '@stores/randomizer'

// Interfaces
import { EUserDetails } from '@interfaces/IRandomizer'

const { updateDetails } = useRandomizerStore()
</script>
