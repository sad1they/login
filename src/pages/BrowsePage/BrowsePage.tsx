import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import './BrowsePage.scss'
import { TIsLogged } from '../../types/types'

function BrowsePage() {
  const navigate = useNavigate()
  const { isLogged } = useSelector((state: TIsLogged) => state?.isLogged)

  useEffect(() => {
    !isLogged && navigate('/login')
  }, [navigate, isLogged])

  return (
    <div className="container">
      <h1>Просмотр</h1>
    </div>
  )
}

export default BrowsePage
