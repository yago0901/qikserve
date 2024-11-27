import "./styles.scss"

export const Menu = () => {
  return (
    <div className='menu'>
      <button className='menu__button --active'>MENU</button>
      <button className='menu__button'>ENTRAR</button>
      <button className='menu__button'>CONTATO</button>
    </div>
  );
}