import { useDispatch, useSelector } from 'react-redux'
import { TData, TDataItem } from '../../types/types'
import './Sidebar.scss'
import { setChildData, setKey } from '../../store/slices/dataSlice'
import { useEffect } from 'react'

interface PropSidebar {
  parent: TDataItem[] | undefined
}

function Sidebar({ parent }: PropSidebar) {
  const dispatch = useDispatch()
  const { key } = useSelector((state: TData) => state?.data)

  useEffect(() => {
    for (const val in parent) {
      if (parent[val].key === key) {
        dispatch(setChildData(parent[val].children))
      }
    }
  }, [dispatch, key, parent])

  const handleClick = (item: TDataItem) => {
    dispatch(setKey(item.key))
  }

  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        {parent ? (
          parent.map((item) => (
            <li
              key={item.key}
              className={
                key === item.key
                  ? 'sidebar__list__item sidebar__list__item__active'
                  : 'sidebar__list__item'
              }
              onClick={() => handleClick(item)}
            >
              {item.name}
            </li>
          ))
        ) : (
          <li>Empty data</li>
        )}
      </ul>
    </div>
  )
}

export default Sidebar
