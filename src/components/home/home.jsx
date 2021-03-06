import Flickity from 'react-flickity-component';
import { NavLink, Link } from "react-router-dom";

import './home.css';
import './flickity.css';
import footer from '../../assets/footer.svg';
import login from '../../assets/login.svg';
import calendar from '../../assets/calendar.svg';

const Home = () => {
  const flickityOptions = {
    wrapAround: true,
    autoPlay: true,
    arrowShape: { 
      x0: 10,
      x1: 60, y1: 50,
      x2: 90, y2: 50,
      x3: 40
    }
  }

  return (
    <>
      <Flickity options={flickityOptions}>
        <div className="carousel-cell empieza">
          <div className="carousel-container">
            <h1 className="h1-carousel">¡Empieza desde ahora!</h1>
            <p>
              Ya puedes encontrar la guía paso a paso para construir y prototipar una aplicación innovadora. Este documento te dará instrucciones para cada fase del proceso, desde la ideación hasta el prototipo.
            </p>
            <Link to="/downloads/GuiaDeHackathon_2021.pdf" target="_blank" download>
              <button>Descarga</button>
            </Link>
          </div>
        </div>

        <div className="carousel-cell fechas">
          <div className="carousel-container">
            <h1 className="h1-carousel">Fechas clave</h1>
            <div className="fechas-container">
              <div className="fecha-carousel">
                <span className="title-fecha">11 de junio:</span>
                Cierre de registros
              </div>
              <div className="fecha-carousel">
                <span className="title-fecha">18 de junio:</span>
                Selección de mejores ideas por universidad
              </div>
              <div className="fecha-carousel">
                <span className="title-fecha">23 de junio:</span>
                Selección de los 5 finalistas
              </div>
              <div className="fecha-carousel">
                <span className="title-fecha">25 de junio:</span>
                Final en vivo y cierre
              </div>
            </div>
            <NavLink to="/agenda"><button>Calendario</button></NavLink>
          </div>
        </div>

        <div className="carousel-cell dudas">
          <div className="carousel-container">
            <h1 className="h1-carousel">¿tienes dudas?</h1>
            <p>
              Si te encuentras atascado en alguno de los pasos de este proceso, no dudes en visitar el foro, donde un equipo de expertos está dispuesto a resolver todas las dudas que tengas.
            </p>
            <NavLink to="/foro"><button>Ir al foro</button></NavLink>
          </div>
        </div>
      </Flickity>

      <section className="home">
        <div className="home-link-container">
          <div className="home-link">
            <h2>Regístrate</h2>
            <div></div>
            <img className="home-logo" src={login} alt=""/>
            <div className="home-link-content">
              <p>
                Desde ya puedes realizar tu registro.  Puedes formar un equipo de 2 a 5 integrantes o regístrarte de manera individual para ser asignado a un grupo con otros estudiantes.
              </p>
              <NavLink to="/registro"><button>Regístrate</button></NavLink>
            </div>
          </div>

          <div className="home-link">
            <h2>Agenda</h2>
            <div></div>
            <img className="home-logo" src={calendar} alt=""/>
            <div className="home-link-content">
              <p>
                Conoce la agenda de eventos que hemos preparado para ti. Tendrás la oportunidad de conocer y aprender de expertos que te guiarán en el proceos de diseño de tu ideas.
              </p>
              <NavLink to="/agenda"><button>Ir a agenda</button></NavLink>
            </div>
          </div>
        </div>
        <img className="footer" src={footer} alt=""/>
      </section>
    </>
  );
}
 
export default Home;
