import "./styles.scss";
import { Menu } from "../Menu"
import { Hero } from "../Hero"

export const Header = () => {
  return (
    <div className='header'>
      <Menu />
      <Hero />
    </div>
  )
}