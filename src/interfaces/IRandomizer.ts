export interface IUser {
  gender: string
  name: IName
  location: ILocation
  email: string
  login: ILogin
  dob: IDob
  registered: IRegistered
  phone: string
  cell: string
  id: IId
  picture: IPicture
  nat: string
}

interface IName {
  title: string
  first: string
  last: string
}

interface ILocation {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: string
  coordinates: {
    latitude: string
    longitude: string
  }
  timezone: {
    offset: string
    description: string
  }
}

interface ILogin {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface IDob {
  date: string
  age: number
}

interface IRegistered {
  date: string
  age: number
}

interface IId {
  name: string
  value: string
}

interface IPicture {
  large: string
  medium: string
  thumbnail: string
}

export interface IInfo {
  seed: string
  results: number
  page: number
  version: string
}
