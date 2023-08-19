import { API } from '@services/api'
import { RandomizeService as RandomizerServiceHTTP } from '@services/Randomizer'

export const RandomizeService = new RandomizerServiceHTTP(API)
