import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Form from '../../components/Form/Form'
import { useEffect } from 'react'
import { TIsLogged } from '../../types/types'
import './LoginPage.scss'

function LoginPage() {
  const navigate = useNavigate()
  const { isLogged } = useSelector((state: TIsLogged) => state?.isLogged)

  useEffect(() => {
    isLogged && navigate('/')
  }, [navigate, isLogged])

  return (
    <div className="container">
      <h1>Авторизация</h1>
      <Form />
    </div>
  )
}

export default LoginPage
