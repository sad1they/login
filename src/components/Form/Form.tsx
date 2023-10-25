import { setLogin } from '../../store/slices/isLoggedSlice'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Form.scss'

function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  interface IFormInput {
    login: string
    password: string
  }

  const { register, handleSubmit } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = () => {
    dispatch(setLogin())
    navigate('/')
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__item">
        <label htmlFor="login">Логин</label>
        <input
          type="text"
          className="form__item__field"
          required={true}
          {...register('login')}
        />
      </div>
      <div className="form__item">
        <label htmlFor="password">Пароль</label>
        <input
          type="password"
          className="form__item__field"
          required={true}
          {...register('password')}
        />
      </div>
      <div className="form__item">
        <input type="submit" value="Войти" className="form__item__btn" />
      </div>
    </form>
  )
}

export default Form
