import { useSelector } from 'react-redux'
import { TData, TDataItem } from '../../types/types'
import Search from '../Search/Search'
import Sort from '../Sort/Sort'
import './Content.scss'

function Content() {
  const { childData } = useSelector((state: TData) => state?.data)
  const { query } = useSelector((state: TData) => state?.data)

  const filterItems = () => {
    return childData
      .filter((el) => el.name.toLowerCase().includes(query.toLowerCase()))
      .map((item: TDataItem) => (
        <div key={item.key} className="content__item">
          {item.name}
        </div>
      ))
  }

  return (
    <div className="main">
      <div className="bar">
        {childData.length > 1 && (
          <>
            <Search />
            <Sort />
          </>
        )}
      </div>
      <div className="content">
        {childData.length ? (
          filterItems()
        ) : (
          <p className="content__message">No items</p>
        )}
      </div>
    </div>
  )
}

export default Content
