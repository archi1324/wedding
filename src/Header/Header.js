
import './Header.css'
import { ReactComponent as HeaderSvg } from "../images/header_img.svg";
import mainImg from "../images/header_img.svg"
// import lineImg from "../images/line.svg"

const Header = () => {

  return (
    <>
      <div className="main__container">
        <HeaderSvg className="main_img" />
        {/* <img className="line_img" src={lineImg} alt="line_img" /> */}
        <p className='header__text'>Artur&Elza</p>
      </div>
    </>
  )
}

export default Header