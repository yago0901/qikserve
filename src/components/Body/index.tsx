import "./styles.scss";

export const Body = () => {
  return (
    <div className='body'>
      <div className='body__search_container'>
        <input className='body__search_container__search' type="text" placeholder='Search menu items' />
        <div className='body__search_container__background'>

        </div>
      </div>
    </div>
  )
}