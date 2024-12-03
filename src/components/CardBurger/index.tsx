import { useSelector } from 'react-redux';
import { IcartItem } from '../../redux/cart/reducer';
import { CartBurgerProps } from './types';
import { RootState } from '../../redux/root-reducer';
import './styles.scss';

const CartBurger = ({burger, setBurgerSelected, setModalIsOpen} :CartBurgerProps ) => {
  
  const { currentCart } = useSelector((rootReducer:RootState) => rootReducer.cartReducer)

  const burgerInCart = currentCart.find((item: IcartItem) => item.id === burger.id);
  return(
  <div
    key={burger.id}
    className='card_burger'
    onClick={() => {
      setBurgerSelected(burger);
      setModalIsOpen(true);
    }}>
    <div className='card_burger__menu_info'>
      <div className='card_burger__menu_info__info'>
        {burgerInCart && burgerInCart.id === burger.id &&
          <div className='card_burger__menu_info__info__amount'>
            {burgerInCart.amount}
          </div>
        }
        <h3>{burger.name}</h3>
      </div>
      <p>{burger.description}</p>
      <span>R${burger.price},00</span>
    </div>
    {burger.images && (
      <div className='card_burger__menu_image'>
        <img alt="Classic Burger" src={burger.images[0].image} />
      </div>
    )}
  </div>
)};

export default CartBurger;