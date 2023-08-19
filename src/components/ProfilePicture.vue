<template>
  <div
    class="border border-neutral-700 rounded-full h-[146px] w-[146px] mx-auto p-2"
    @click="randomize"
  >
    <img
      v-if="details.thumbnail"
      class="rounded-full object-fill cursor-pointer"
      :src="details.thumbnail"
      alt="profile-picture"
    />
  </div>
</template>

<script setup lang="ts">
import { useRandomizerStore } from '@stores/randomizer'
import { storeToRefs } from 'pinia'

const store = useRandomizerStore()

const { randomize } = store
const { details } = storeToRefs(store)
</script>
