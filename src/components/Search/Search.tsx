import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../../store/slices/dataSlice'
import './Search.scss'
import { TData } from '../../types/types'

function Search() {
  const dispatch = useDispatch()
  const { query } = useSelector((state: TData) => state?.data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(e.target.value))
  }

  return (
    <input
      type="text"
      placeholder="Search item"
      className="search"
      onChange={handleChange}
      value={query}
    />
  )
}

export default Search
