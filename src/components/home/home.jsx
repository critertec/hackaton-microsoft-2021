import Flickity from 'react-flickity-component';

import './home.css';
import './flickity.css';
import footer from '../../assets/footer.svg';

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
      <section className="home">
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

        <img className="footer" src={footer} alt=""/>
      </section>
  );
}
 
export default Home;
