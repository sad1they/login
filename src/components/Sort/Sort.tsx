import { useDispatch, useSelector } from 'react-redux'
import { setSort } from '../../store/slices/dataSlice'
import './Sort.scss'
import { TData } from '../../types/types'

function Sort() {
  const dispatch = useDispatch()
  const { sort } = useSelector((state: TData) => state?.data)

  return (
    <div className="sort">
      <select
        onChange={(e) => dispatch(setSort(e.target.value))}
        value={sort}
        className="sort__select"
      >
        <option key="default" value="default">
          default
        </option>
        <option key="A_Z" value="A_Z">
          A_Z
        </option>
      </select>
    </div>
  )
}

export default Sort
