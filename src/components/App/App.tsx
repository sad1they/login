import { ReactNode } from 'react'
import Header from '../Header/Header'
import './App.scss'

type AppProp = {
  children: ReactNode
}

function App({ children }: AppProp) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default App
