import { computed, reactive, ref } from 'vue'
import { defineStore } from 'pinia'

import { RandomizeService } from '@services/index'

import type { IUser, IOptions } from '@interfaces/IRandomizer'

export const useRandomizerStore = defineStore('randomizer', () => {
  // States
  const user = ref({} as IUser)
  const isFetching = ref(false)

  // User Details State
  const details = reactive({
    title: 'My Name is',
    thumbnail: '',
    info: ''
  })

  // Actions
  /**
   * Randomize a new user calling the API and define user state as an IUser object.
   */
  async function randomize() {
    isFetching.value = true
    try {
      const response = await RandomizeService.randomize()
      user.value = response
      details.thumbnail = response.picture.large
      updateDetails('name')
    } catch (error) {
      console.error(error)
    } finally {
      isFetching.value = false
    }
  }

  function updateDetails(key: string) {
    if (details.thumbnail.length === 0) return

    details.title = `My ${key} is`

    const lKey = key.toLowerCase()

    const options: IOptions = {
      location: getAddress,
      name: getFullName,
      phone: getPhone,
      password: getPassword,
      email: getEmail,
      dob: getDob
    }

    details.info = options[lKey].value
  }

  // Getters
  const getAddress = computed(() => {
    const location = user.value.location.street
    return `${location.number} ${location.name}`
  })

  const getFullName = computed(() => {
    const name = user.value.name
    return `${name.first} ${name.last}`
  })

  const getEmail = computed(() => {
    return user.value.email
  })

  const getPhone = computed(() => {
    return user.value.phone
  })

  const getDob = computed(() => {
    const dob = user.value.dob.date.split('T')[0].split('-').reverse().join('/')
    return dob
  })

  const getPassword = computed(() => {
    return user.value.login.password
  })

  return { details, isFetching, randomize, updateDetails }
})
