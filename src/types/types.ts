type TIsLogged = {
  isLogged: {
    isLogged: boolean
  }
}

type TDataItem = {
  key: string;
  name: string;
  children?: TDataItem[]
}

type TStateData = {
  query: string,
  data: TDataItem[],
  childData: TDataItem[],
  key: string,
  sort: 'default' | 'A_Z'
}

type TStateLogin = {
  isLogged: boolean
}

type TData = {
  data: TStateData
}

export type {
  TIsLogged,
  TDataItem,
  TStateData,
  TStateLogin,
  TData
}