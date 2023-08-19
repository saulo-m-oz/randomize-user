import { ref } from 'vue'
import { defineStore } from 'pinia'

import { RandomizeService } from '@services/index'

import type { IUser } from '@interfaces/IRandomizer'

export const useRandomizerStore = defineStore('randomizer', () => {
  // States
  const user = ref({} as IUser)
  const isFetching = ref(false)

  // Actions
  /**
   * Randomize a new user calling the API and define user state as an IUser object.
   */
  async function randomize() {
    isFetching.value = true
    try {
      const response = await RandomizeService.randomize()
      user.value = response
    } catch (error) {
      console.error(error)
    } finally {
      isFetching.value = false
    }
  }

  return { user, isFetching, randomize }
})
