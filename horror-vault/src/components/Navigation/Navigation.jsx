import "./Navigation.css";
import logoicon from "../../assets/horror vault-icon.svg";
import { Link } from "react-router-dom";


function Navigation() {
  return  <div className="navigation__container">
            <nav className="navbar">
               <div className="navigation__logo"> 
                <img src={logoicon} alt="Logo Horror Vault" className="navigation__logo" /> 
                </div>
                 <ul className="nav-links"> 
                  <li > <Link to="/" className="navigation__home">Home</Link> </li> 
                  <li > <Link to="/movies" className="navigation__movies">Peliculas</Link> </li> </ul>
                   </nav>
            </div>;
}

export default Navigation;
