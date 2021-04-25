import Flickity from 'react-flickity-component';

import './home.css';
import './flickity.css';

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
      <section className="home_carousel">
        <Flickity 
          options={flickityOptions}
        >
          <div className="carousel-cell">
            <div className="carousel-container"></div>
            <div className="carousel-container">
              <h1 className="h1-carousel">¡Empieza desde ahora!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisc-ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="carousel-cell">
            <h1>¡Termina hasta despues!</h1>
          </div>
          <div className="carousel-cell">
            <h1>¡Dura durante ?!</h1>
          </div>
        </Flickity>
      </section>
      
      <h1>Resuelve tus dudas</h1>
      <h2>Ingresa al foro</h2>
      <h3>Bienvenido</h3>

      <div>
        <button>Ir al evento</button>
      </div>

      <br/><br/>

      <div>
        <button>Semana 1</button>
        <button>Semana 2</button>
        <button>Semana 3</button>
      </div>
    </>
  );
}
 
export default Home;
