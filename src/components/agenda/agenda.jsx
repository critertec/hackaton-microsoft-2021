import { useState } from 'react';
import './agenda.css';
import CalendarGrid from './components/calendar-grid/calendar-grid'
import CalendarList from './components/calendar-list/calendar-list'
import * as eventData from '../../events.json';

const Agenda = () => {
  const [selectedWeek, setSelectedWeek] = useState('Semana 3');

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

      <CalendarGrid
        week={eventData.default[selectedWeek]}
      />

      <CalendarList
        week={eventData.default[selectedWeek]}
      />

    </section>
  );
}

export default Agenda;
