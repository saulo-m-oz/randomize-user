import { HttpService } from '@services/api/HttpService'
import type {
  IRandomizerContract,
  IRandomizerResponse
} from '@services/Randomizer/RandomizerContract'

export class RandomizeService extends HttpService implements IRandomizerContract {
  async randomize() {
    const { data } = await this.HTTP.get<IRandomizerResponse>('')
    return data.results[0]
  }
}
