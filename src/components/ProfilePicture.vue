<template>
  <div class="border border-neutral-700 rounded-full h-[146px] w-[146px] mx-auto p-2">
    <img
      v-if="details.thumbnail"
      class="rounded-full object-fill"
      :src="details.thumbnail"
      alt="profile-picture"
    />
  </div>
</template>

<script setup lang="ts">
import { useRandomizerStore } from '@stores/randomizer'
import { storeToRefs } from 'pinia'

const { details } = storeToRefs(useRandomizerStore())
</script>
