import { HttpService } from '@services/api/HttpService'

export class RandomizeService extends HttpService {
  async randomize() {
    return await this.HTTP.get('')
  }
}
