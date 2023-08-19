import { RandomizeService } from '@services/index'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRandomizerStore = defineStore('randomizer', () => {
  // States
  const user = ref({})
  const isFetching = ref(false)

  // Actions
  /**
   * Randomize a new user calling the API and returns a user object.
   */
  async function randomize() {
    isFetching.value = true
    try {
      const { data } = await RandomizeService.randomize()
      user.value = data
    } catch (error) {
      console.error(error)
    } finally {
      isFetching.value = false
    }
  }

  return { user, isFetching, randomize }
})
