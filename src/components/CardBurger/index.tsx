import { useSelector } from 'react-redux';
import { MenuItem } from '../../api/menuApi';
import './styles.scss'
import { IcartItem } from '../../redux/cart/reducer';

interface CartBurgerProps {
  burger: MenuItem;
  setBurgerSelected: (burger: MenuItem) => void;
  setModalIsOpen: (isOpen: boolean) => void;
}

interface CardState {
  currentCart: any[];
}

export interface RootState {
  cartReducer : CardState;
}

const CartBurger = ({burger, setBurgerSelected, setModalIsOpen} :CartBurgerProps ) => {
  
  const { currentCart } = useSelector((rootReducer:RootState) => rootReducer.cartReducer)

  const burgerInCart = currentCart.find((item: IcartItem) => item.id === burger.id);
  return(
  <div
    key={burger.id}
    className='body__search_container__background__items__burgers__details__menu_option__burgers__container'
    onClick={() => {
      setBurgerSelected(burger);
      setModalIsOpen(true);
    }}>
    <div className='body__search_container__background__items__burgers__details__menu_option__burgers__container__menu_info'>
      <div className='body__search_container__background__items__burgers__details__menu_option__burgers__container__menu_info__info'>
        {burgerInCart && burgerInCart.id === burger.id &&
          <div className='body__search_container__background__items__burgers__details__menu_option__burgers__container__menu_info__info__amount'>
            {burgerInCart.amount}
          </div>
        }
        <h3>{burger.name}</h3>
      </div>
      <p>{burger.description}</p>
      <span>R${burger.price},00</span>
    </div>
    {burger.images && (
      <div className='body__search_container__background__items__burgers__details__menu_option__burgers__container__menu_image'>
        <img alt="Classic Burger" src={burger.images[0].image} />
      </div>
    )}
  </div>
)};

export default CartBurger;