import { useState } from 'react';
import './formacion.css';
import * as formationData from '../../formation.json';
import login from '../../assets/login.svg';

const Formacion = () => {
  const [selectedChapter, setSelectedChapter] = useState('Empieza aquí');

  return (
    <section className="formacion">
      <div className="menu">
        <ul>
          {Object.keys(formationData.default).map((chapter) => {
            return (
              <li
                key={chapter}
                onClick={() => setSelectedChapter(chapter)}
                className={selectedChapter === chapter ? 'selected' : ''}
              >
                  {chapter}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="content">
        {formationData.default[selectedChapter].map((item) => {
          switch (item.type) {
            case 'title':
              return (
                <h1 key={Math.random()}>{item.content}</h1>
              )
            case 'paragraph':
              return (
                <p key={Math.random()}>{item.content}</p>
              )
            case 'download':
              return (
                <div key={Math.random()}>
                  <img className="logo" src={login} alt=""/>
                  <div><button>Descarga</button></div>
                </div>
              )
            case 'video':
              return (
                <div key={Math.random()} className="video">
                  <div className="videoWrapper">
                    <iframe
                      src={item.content}
                      title={item.content}
                      allowFullScreen
                    />
                  </div>
                </div>
              )
            default:
              return (
                <div key={Math.random()}></div>
              )
          }
        })}
      </div>
    </section>
  );
}
 
export default Formacion;