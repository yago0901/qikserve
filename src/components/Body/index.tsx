import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./styles.scss";

export const Body = () => {
  return (
    <div className='body'>
      <div className='body__search_container'>
        <div className='body__search_container__icon_container'>
          <FontAwesomeIcon className='body__search_container__icon_container__icon' icon={faSearch} />
        </div>
        <input className='body__search_container__search' type="text" placeholder='Search menu itens' />
      </div>
      <div className='body__search_container__background'>
        <div className='body__search_container__background__items'>
          teste
        </div>
        <div className='body__search_container__background__cart'>
          <div className='body__search_container__background__cart__title'>
            Carrinho
          </div>
          <div className='body__search_container__background__cart__content'>
            Seu carrinho está vazio
          </div>
        </div>
      </div>
    </div>
  )
}