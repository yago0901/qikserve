import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import "./styles.scss";
import { fetchMenuDetails, Menu } from '../../api/menuApi';

export const Body = () => {
  const [menu, setMenu] = useState<Menu | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const [firtDetailIsOpen, setFirtDetailIsOpen] = useState(false);
  const [secondDetailIsOpen, setSecondDetailIsOpen] = useState(false);

  const handleToggle = (detailNumber: number) => {
    if (detailNumber === 1) {
      setFirtDetailIsOpen(!firtDetailIsOpen);
    }
    setSecondDetailIsOpen(!secondDetailIsOpen)
  };

  useEffect(() => {
    const getMenuDetails = async () => {
      try {
        const data = await fetchMenuDetails();
        console.log(data);
        setMenu(data);
      } catch (err) {
        setError('Erro ao carregar o menu' + err);
      } finally {
        setLoading(false);
      }
    };

    getMenuDetails();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

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
          {menu && (
            <div className='body__search_container__background__items__menu'>
              {menu?.sections.map((section) => (
                <div className='body__search_container__background__items__menu__content_card'
                  key={section.id}
                >
                  {section.images && section.images.length > 0 && (
                    <div className='body__search_container__background__items__menu__content_card__content_img'>
                      <img className='body__search_container__background__items__menu__content_card__content_img__img'
                        src={section.images[0].image}
                        alt={`Image of ${section.name}`}
                      />
                    </div>
                  )}
                  <div className='body__search_container__background__items__menu__content_card__content_text'>
                    <div className='body__search_container__background__items__menu__content_card__content_text__text'>
                      <h2>
                        {section.name}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className='body__search_container__background__items__burgers'>
            <details className='body__search_container__background__items__burgers__details' onToggle={() => handleToggle(1)} open={firtDetailIsOpen}>
              <summary className='body__search_container__background__items__burgers__details__summary'>
                Burgers
              </summary>
              <div className='body__search_container__background__items__burgers__details__menu_option'>
                {menu?.sections[0].items && (
                  <div className='body__search_container__background__items__burgers__details__menu_option__burgers'>
                    {menu.sections[0].items.map((burger) => (
                      <div key={burger.id} className='body__search_container__background__items__burgers__details__menu_option__burgers__container'>
                        <div className='body__search_container__background__items__burgers__details__menu_option__burgers__container__menu_info'>
                          <h3>{burger.name}</h3>
                          <p>{burger.description}</p>
                          <span>R${burger.price},00</span>
                        </div>
                        {burger.images && (
                          <div className='body__search_container__background__items__burgers__details__menu_option__burgers__container__menu_image'>
                            <img alt="Classic Burger" src={burger.images[0].image} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </details>
          </div>
          <div className={`body__search_container__background__items__drinks ${firtDetailIsOpen ? 'detail_active' : ''}`}>
            <details className='body__search_container__background__items__drinks__details'>
              <summary className='body__search_container__background__items__drinks__details__summary'>
                Drinks
              </summary>
              <div className='body__search_container__background__items__drinks__details__menu_option'>
                {menu?.sections[1].items && (
                  <div className='body__search_container__background__items__drinks__details__menu_option__drink'>
                    {menu.sections[1].items.map((drink) => (
                      <div key={drink.id} className='body__search_container__background__items__drinks__details__menu_option__drink__container'>
                        <div className='body__search_container__background__items__drinks__details__menu_option__drink__container__menu_info'>
                          <h3>{drink.name}</h3>
                          <p>{drink.description}</p>
                          <span>R${drink.price},00</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </details>
          </div>
        </div>
        <div className='body__search_container__background__cart'>
          <div className='body__search_container__background__cart__title'>
            Carrinho
          </div>
          <div className='body__search_container__background__cart__content'>
            Seu carrinho está vazio
          </div>
        </div>
      </div >
    </div >
  )
}