import "./styles.scss";
import Logo from "../../assets/logo.png"

export const Hero = () => {
  return (
    <div className='hero'>
      <img className='hero__logo' src={Logo} alt="" />
      <div className='hero__blur'></div>
      <div className='hero__image'></div>
    </div>
  )
}