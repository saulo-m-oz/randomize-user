<template>
  <BaseCard>
    <ProfilePicture />
    <UserDetails />
    <NavigationBar :options="Object.keys(EUserDetails)" />
  </BaseCard>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// Components
import BaseCard from '@components/base/BaseCard.vue'
import ProfilePicture from '@components/ProfilePicture.vue'
import UserDetails from '@components/UserDetails.vue'
import NavigationBar from '@components/NavigationBar.vue'

// Interfaces
import { EUserDetails } from '@interfaces/IRandomizer'

// Stores
import { useRandomizerStore } from '@stores/randomizer'

const { randomize } = useRandomizerStore()
onMounted(randomize)
</script>
