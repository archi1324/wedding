
import './Header.css'
import mainImg from "../images/header_img.svg"
// import lineImg from "../images/line.svg"

const Header = () => {

  return (
    <>
      <div className="main__container">
        <img className="main_img" src={mainImg} alt="main_img" />
        {/* <img className="line_img" src={lineImg} alt="line_img" /> */}
        <p className='header__text'>Artur&Elza</p>
      </div>
    </>
  )
}

export default Header