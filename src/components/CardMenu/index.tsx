import './styles.scss'

const CartMenu = ({section}) => {
  return (

    <div className='content_card'
      key={section.id}
    >
      {section.images && section.images.length > 0 && (
        <div className='content_card__content_img'>
          <img className='content_card__content_img__img'
            src={section.images[0].image}
            alt={`Image of ${section.name}`}
          />
        </div>
      )}
      <div className='content_card__content_text'>
        <div className='content_card__content_text__text'>
          <h2>
            {section.name}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default CartMenu;
