import lupa from "../../assets/lupa.png"
import "./styles.scss";

export const Body = () => {
  return (
    <div className='body'>
      <div className='body__search_container'>
        <img className='body__search_container__search_icon' src={lupa} alt="" />
        <input className='body__search_container__search' type="text" placeholder='Search menu itens' />
      </div> 
      <div className='body__search_container__background'>
      </div>
    </div>
  )
}