import logo from '../assets/logo.png'
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBurger from './NavBurger';
import NavMain from './NavMain'

const Header = () => {
    return (
        <div className="header">
        <NavBurger/>
        <img src={logo} className="logoHeader" alt="Revanove.fr"/>
        <NavMain/>
        <span className="socialNetworks">
          <FontAwesomeIcon icon={faInstagram} className="iconsInstagram"/>
          <FontAwesomeIcon icon={faFacebookF} className="iconsFacebook"/>
        </span>
      </div>
    )
}

export default Header;