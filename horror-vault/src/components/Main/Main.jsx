import Hero from "../../assets/hero.svg";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
   <main>
  <div className="home_container">
    <section className="home_hero">

      

      <div className="home_hero__content">
        <h2 className="home_hero__title">
          Encuentra tus películas de horror favoritas en un solo lugar
        </h2>

       <Link to="/movies" className="home_hero__button">
        Buscar
      </Link>
      </div>

      <img
        src={Hero}
        alt="Hero"
        className="home_hero__image"
      />

    </section>
  </div>
</main>
  );
}

export default Main;