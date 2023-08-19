import type { IInfo, IUser } from '@interfaces/IRandomizer'

export interface IRandomizerResponse {
  results: Array<IUser>
  info: IInfo
}

export interface IRandomizerContract {
  randomize(): Promise<IUser>
}
