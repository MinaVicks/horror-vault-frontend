import "./Navigation.css";
import logoicon from "../../assets/horror vault-icon.svg";

function Navigation() {
  return  <div className="navigation__container">
        <div className="navigation__logo">
          <img src={logoicon} alt="Logo Horror Vault" className="navigation__logo" />
        </div> 
        <div className="navigation__buttons">
         <div className="navigation__home">Home</div>
         <div className="navigation__movies">Peliculas</div>
        </div>
        </div>;
}

export default Navigation;
