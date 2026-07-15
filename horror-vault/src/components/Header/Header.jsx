import "./Header.css";
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../../assets/horror vault_logofull.svg";

function Header() {
  return  <div className="header__container">
    <Navigation />
    <div className="header__logo">
      <img src={Logo} alt="Logo Horror Vault" className="header__logo" />
    </div>
    </div> ;
}

export default Header;