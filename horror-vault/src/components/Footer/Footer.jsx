import logoicon from "../../assets/horror vault-icon.svg";

function Footer() {
  return  <footer className="footer">
    <div className="navigation__logo">
                          <img src={logoicon} alt="Logo Horror Vault" className="navigation__logo" />
                    </div> 
      <p className="footer__copyright">© 2026 Horror Vault - Powered by TMDB</p>
    </footer>;

}

export default Footer;
