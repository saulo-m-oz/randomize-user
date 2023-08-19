import { Axios } from 'axios'

export abstract class HttpService {
  protected HTTP: Axios
  constructor(HTTP: Axios) {
    this.HTTP = HTTP
  }
}
