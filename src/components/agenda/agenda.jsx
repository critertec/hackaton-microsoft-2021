import { useState } from 'react';
import './agenda.css';
import Calendar from './components/calendar'
import * as eventData from '../../events.json';

const Agenda = () => {
  const [selectedWeek, setSelectedWeek] = useState('Semana 1');

  return (
    <section>
      <h1>Agenda de eventos</h1>

      <div>
        {Object.keys(eventData.default).map((week) => {
          return (
            <button
              key={week}
              className={selectedWeek === week ? 'selected' : ''}
              onClick={() => setSelectedWeek(week)}
            >
              {week}
            </button>
          )
        })}
      </div>

      <Calendar className="calendar" events={eventData.default[selectedWeek]}/>
    </section>
  );
}

export default Agenda;
