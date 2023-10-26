import { useDispatch, useSelector } from 'react-redux'
import { TData, TDataItem } from '../../types/types'
import { setChildData, setKey } from '../../store/slices/dataSlice'
import { useEffect } from 'react'
import './Sidebar.scss'

interface PropSidebar {
  parent: TDataItem[] | undefined
}

function Sidebar({ parent }: PropSidebar) {
  const dispatch = useDispatch()
  const { key } = useSelector((state: TData) => state?.data)
  const { childData } = useSelector((state: TData) => state?.data)

  useEffect(() => {
    for (const val in parent) {
      if (parent[val].key === key) {
        dispatch(setChildData(parent[val].children))
      }
    }
  }, [dispatch, key, parent])

  function handleClick(item: TDataItem, e) {
    e && e.stopPropagation()

    const waitState = async () => {
      const { payload } = await dispatch(setKey(item.key))

      return payload
    }

    waitState().then((payload) => {
      if (item.key === payload && childData) {
        for (const val of childData) {
          val.key === payload && dispatch(setChildData(val.children))
        }
      }
    })
  }

  const showChild = (item: TDataItem) => {
    return item &&
      childData &&
      childData.length &&
      childData[0].key.startsWith(item.key) ? (
      <ul className="sidebar__list">
        {childData.map((item) => (
          <li
            key={item.key}
            className={
              key === item.key
                ? 'sidebar__list__item sidebar__list__item__active'
                : 'sidebar__list__item'
            }
            onClick={(e) => handleClick(item, e)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    ) : null
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
              onClick={(e) => handleClick(item, e)}
            >
              {item.name}
              {showChild(item)}
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
