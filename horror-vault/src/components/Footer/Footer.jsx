import logoicon from "../../assets/horror vault-icon.svg";
import "./Footer.css";

function Footer() {
  return  <footer className="footer__container">
    <div className="footer__logo">
                          <img src={logoicon} alt="Logo Horror Vault"/>
                    </div> 
      <p className="footer__copyright">© 2026 Horror Vault - Powered by TMDB</p>
    </footer>;

}

export default Footer;
