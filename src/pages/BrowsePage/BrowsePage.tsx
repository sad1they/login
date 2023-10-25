import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TData, TIsLogged } from '../../types/types'
import Sidebar from '../../components/Sidebar/Sidebar'
import Content from '../../components/Content/Content'
import getData from '../../api/getData'
import { setData } from '../../store/slices/dataSlice'
import './BrowsePage.scss'

function BrowsePage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLogged } = useSelector((state: TIsLogged) => state?.isLogged)
  const { data } = useSelector((state: TData) => state?.data)

  let parent
  data ? (parent = data[0]?.children) : null

  useEffect(() => {
    getData().then((res) => dispatch(setData(res)))
  }, [dispatch])

  useEffect(() => {
    !isLogged && navigate('/login')
  }, [navigate, isLogged])

  return (
    <>
      <div className="container">
        <h1>Просмотр</h1>
      </div>
      <div className="browse">
        <Sidebar parent={parent} />
        <Content />
      </div>
    </>
  )
}

export default BrowsePage
