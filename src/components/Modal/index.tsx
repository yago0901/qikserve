import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Item, MenuItem } from '../../api/menuApi';
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import "./styles.scss";
import { useState } from 'react';
interface IModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  burger?: MenuItem;
}

export const Modal = ({ isOpen, onClose, burger }: IModalProps) => {

  const { currentCart } = useSelector((rootReducer) => rootReducer.cartReducer)

  const dispatch = useDispatch();

  const existingCartItem = currentCart.find((item: Item) => item.id === burger?.id);
  const amount = existingCartItem ? existingCartItem.amount : 1;
  const [burgerQtd, setBurgerQtd] = useState(amount);

  const [selectedItem, setSelectedItem] = useState<string | undefined>(undefined);

  const handleAddProductCart = () => {

    if (selectedItem === undefined) {
      return;
    }

    if (existingCartItem) {
      /*dispatch({
        type: 'cart/updateAmount',
        payload: { cartItem: { id: burger?.id, amount: existingCartItem.amount + burgerQtd } }
      });*/
      console.log('já existe no carrinho')
    } else {
      dispatch({
        type: 'cart/add',
        payload: { cartItem: { id: burger?.id, name: burger?.name, description: selectedItem, price: burger?.price, amount: burgerQtd } }
      });
    }
    onClose(false);
  };

  const increaseQuantity = () => { setBurgerQtd((prev) => prev + 1) };
  const decreaseQuantity = () => setBurgerQtd((prev) => (prev > 1 ? prev - 1 : prev));

  if (!isOpen) return null;

  return (
    <div className='modal_container'>
      <div className='modal_container__modal' onClick={(e) => e.stopPropagation()} >
        {burger?.images?.[0]?.image && (
          <>
            <div className='modal_container__modal__container_img'>
              <div
                className='modal_container__modal__container_img__container_close'>
                <div className='modal_container__modal__container_img__container_close__close'>
                  <FontAwesomeIcon icon={faClose} onClick={() => onClose(false)} />
                </div>
              </div>
              <img src={burger.images[0].image} alt="teste" />
            </div>
            <div className='modal_container__modal__container_title'>
              <div className='modal_container__modal__container_title__title'>
                <h1>{burger.name}</h1>
                <p>{burger.description}</p>
              </div>
            </div>
            <div className='modal_container__modal__container_title_options'>
              <h1>Choose your size</h1>
              <p>Select 1 option</p>
            </div>
          </>
        )}
        {burger?.modifiers && (
          <>
            {burger.modifiers[0].items.map((item) => {
              return (
                <div
                  key={item.id}
                  className='modal_container__modal__container_meet'
                >
                  <div className='modal_container__modal__container_meet__meet'>
                    <div>
                      <h1>
                        {item.name}
                      </h1>
                      <p>
                        {`R$${item.price},00`}
                      </p>
                    </div>
                    <input type="radio" name="size" onChange={() => setSelectedItem(item.name)} />
                  </div>
                  <h1>
                  </h1>
                </div>
              )
            })}
          </>
        )}
        <div className='modal_container__modal__container_actions'>
          <div className='modal_container__modal__container_actions__actions'>
            <button
              className='modal_container__modal__container_actions__actions__button_minus'
              onClick={decreaseQuantity}
              disabled={burgerQtd <= 1}
            >
              <FontAwesomeIcon icon={faMinus}
                className='modal_container__modal__container_actions__actions__button__minus' />
            </button>
            <span>
              {burgerQtd}
            </span>
            <button
              className='modal_container__modal__container_actions__actions__button_plus'
              onClick={increaseQuantity}
            >
              <FontAwesomeIcon icon={faPlus}
                className='modal_container__modal__container_actions__actions__button__plus' />
            </button>
          </div>
          <div className='modal_container__modal__container_actions__submit'>
            <button
              className='modal_container__modal__container_actions__submit__button'
              onClick={handleAddProductCart}
            >
              Add to Order
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}