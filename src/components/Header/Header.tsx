import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { TIsLogged } from '../../types/types'
import { setLogin } from '../../store/slices/isLoggedSlice'
import './Header.scss'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLogged } = useSelector((state: TIsLogged) => state?.isLogged)

  function handleClick() {
    isLogged && dispatch(setLogin())
    navigate('/login')
  }

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">Лого</div>
        <ul className="header__menu">
          <NavLink
            to={'/'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li className="header__menu__item">Главная</li>
          </NavLink>
          <NavLink
            to={'/browse'}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <li className="header__menu__item">Просмотр</li>
          </NavLink>
          <button onClick={handleClick} className="header__menu__login">
            {isLogged ? 'Выйти' : 'Войти'}
          </button>
        </ul>
      </div>
    </header>
  )
}

export default Header
