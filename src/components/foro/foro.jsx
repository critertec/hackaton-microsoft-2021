import "./foro.css";
import * as expertData from '../../experts.json';
import images from "./experts/images";

const Foro = () => {
  return (
    <section className="foro-section">
      <h1>Resuelve tus dudas</h1>
      <p>
        Si tienes preguntas respecto a algún proceso técnico, creativo o de la organización del hackathon, encuentra en el GitHub del hackathon la guía que necesitas. Contamos con un equipo de expertos dispuesto a asesorarte.
      </p>

      <h2>Ingresa al foro</h2>
      <ol>
        <li>
         <b>Crea una cuenta en GitHub</b>, el proceso es agíl y lo puedes realizar desde aquí. En caso de que ya estés registrado, puedes acceder al foro usando tu cuenta.
        </li>
        <li>
          Ingresa al foro oficial del Hackathon, en donde <b>encontrarás diferentes categorías en las cuales podrás realizar tus preguntas</b> y obtener ayuda de nuestro equipo de expertos.
        </li>
        <li>
          Te invitamos a explorar las preguntas que otros integrantes hayan realizado, puede que allí <b>encuentres solución a tus dudas</b> o puedas ayudarlos a encontrar la respuesta a sus dudas.
        </li>
      </ol>
      <a href="https://github.com/MicrosoftHackathon/HackathonMicrosoft/discussions" target="blank">
        <button className="foro-button">Ir al foro</button>
      </a>

      <h2>Conoce a los expertos</h2>
      <div className="expert-container">
        {expertData.default.map((expert) => { return(
          <div className="expert" key={expert.img}>
            <img src={images[expert.img]} alt="" />
            <p>
              <span>{expert.name}: </span>
              {expert.content}
            </p>
          </div>
        )})}
      </div>
    </section>
  );
}
 
export default Foro;