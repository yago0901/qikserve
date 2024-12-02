import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { IcartItem } from '../../redux/cart/reducer';
import "./styles.scss"

export const Cart = () => {

  const { currentCart } = useSelector((rootReducer) => rootReducer.cartReducer)

  const dispatch = useDispatch();

  const handleChangeQtdProduct = (id: number, increment: number) => {

    const updatedCart = currentCart.map((item: IcartItem) =>
      item.id === id
        ? { ...item, amount: item.amount + increment }
        : item
    );

    const updatedItem = updatedCart.find(item => item.id === id);

    if (updatedItem) {
      dispatch({
        type: 'cart/updateAmount',
        payload: {
          cartItem: updatedItem
        }
      });
    }
  }
  const subtotal = currentCart.reduce((sum, item) => sum + (item.price * item.amount), 0);

  const total = subtotal;

  return (
    <div className='cart'>
      <div className='cart__title'>
        Carrinho
      </div>
      <div className='cart__content'>
        {currentCart.length !== 0 ? (<>
          {currentCart.map((itemCart: IcartItem) => (
            <div key={itemCart.id} className='cart__content__container_card_item'>
              <div className='cart__content__container_card_item__description_title'>
                <div className='cart__content__container_card_item__description_title__title'>
                  {itemCart.name}
                </div>
                <div className='cart__content__container_card_item__description_title__price'>
                  {`R$ ${itemCart.price},00`}
                </div>
              </div>
              <div className='cart__content__container_card_item__description'>
                {itemCart.description}
              </div>
              <div className='cart__content__container_card_item__actions'>
                <button
                  className='cart__content__container_card_item__actions__button_minus'
                  onClick={() => { handleChangeQtdProduct(itemCart.id, -1) }}
                  disabled={itemCart.amount <= 1}
                >
                  <FontAwesomeIcon icon={faMinus}
                    className='cart__content__container_card_item__actions__button__minus' />
                </button>
                <div className='cart__content__container_card_item__actions__qtd' >
                  {itemCart.amount}
                </div>
                <button
                  className="cart__content__container_card_item__actions__button_plus"
                  onClick={() => { handleChangeQtdProduct(itemCart.id, 1) }}
                >
                  <FontAwesomeIcon icon={faPlus}
                    className='cart__content__container_card_item__actions__action__button__plus' />
                </button>
              </div>
            </div>
          ))}
          <div className='cart__container_total'>
            <div className='cart__container_total__content_subtotal'>
              <div className='cart__container_total__content_subtotal__subtotal'>
                <h1>Sub Total</h1>
                <p>{`R$ ${subtotal}`}</p>
              </div>
            </div>
            <div className='cart__container_total__content_subtotal'>
              <div className='cart__container_total__content_total__total'>
                <h1>Total</h1>
                <p>{`R$ ${total}`}</p>
              </div>
            </div>
          </div>
        </>
        ) : (
          <div>carrinho vazio</div>
        )}
      </div>
    </div>
  )
}