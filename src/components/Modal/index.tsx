import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuItem } from '../../api/menuApi';
import { faClose, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import "./styles.scss";

interface IModalProps {
  isOpen: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  burger?: MenuItem;
}

export const Modal = ({ isOpen, onClose, burger }: IModalProps) => {
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
                    <input type="radio" name="size" />
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
            <button className='modal_container__modal__container_actions__actions__button_minus'>
              <FontAwesomeIcon icon={faMinus} 
              className='modal_container__modal__container_actions__actions__button__minus'/>
            </button>
            <span>
              1
            </span>
            <button className='modal_container__modal__container_actions__actions__button_plus'>
            <FontAwesomeIcon icon={faPlus} 
            className='modal_container__modal__container_actions__actions__button__plus'/>
            </button>
          </div>
          <div className='modal_container__modal__container_actions__submit'>
            <button className='modal_container__modal__container_actions__submit__button'>Add to Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}