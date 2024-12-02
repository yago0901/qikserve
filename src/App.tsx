import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { fetchMenuDetails, Menu, MenuItem } from './api/menuApi';
import { Modal } from './components/Modal';
import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { useSelector } from 'react-redux';
import "./index.scss"
import "./styles.scss";
import CartMenu from './components/CardMenu';
import CartBurger from './components/CardBurger';

function App() {
  const [menu, setMenu] = useState<Menu | undefined>(undefined);

  const [firtDetailIsOpen, setFirtDetailIsOpen] = useState(false);
  const [secondDetailIsOpen, setSecondDetailIsOpen] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [burgerSelected, setBurgerSelected] = useState<MenuItem | undefined>(undefined);

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
        setMenu(data);
      } catch (err) {
        console.log('Erro ao carregar o menu' + err);
      }
    };

    getMenuDetails();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {modalIsOpen && (
        <>
          <div className="container_modal" onClick={() => setModalIsOpen(false)}>
            <Modal isOpen={modalIsOpen} onClose={setModalIsOpen} burger={burgerSelected} />
          </div>
        </>
      )}
      <Header />
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
                  <CartMenu key={section.id} section={section} />
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
                        <CartBurger
                          key={burger.id}
                          burger={burger}
                          setBurgerSelected={setBurgerSelected}
                          setModalIsOpen={setModalIsOpen}
                        />
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
          <Cart />
        </div>
      </div >
    </div>
  )
}
export default App;