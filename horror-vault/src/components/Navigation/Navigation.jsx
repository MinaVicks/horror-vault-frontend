import "./Navigation.css";
import logoicon from "../../assets/horror vault-icon.svg";

function Navigation() {
  return  <div className="navigation__container">
            <nav className="navbar">
                <div className="navigation__logo">
                      <img src={logoicon} alt="Logo Horror Vault" className="navigation__logo" />
                </div> 
                <ul className="nav-links">
                      <li className="navigation__home">Home</li>
                      <li className="navigation__movies">Peliculas</li>
                </ul>
              </nav>
            </div>;
}

export default Navigation;
