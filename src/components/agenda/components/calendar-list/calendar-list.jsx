import './calendar-list.css';

const CalendarList = ({week}) => {
  return (
    <div className="calendar-list">
      {Object.keys(week).map((weekday) => {
        return (
          <div key={weekday}>
            {week[weekday].events &&
              <>
                <div key={'title'+weekday} className="weekday-list">
                  <p>{week[weekday].day}</p>
                  {weekday}
                </div>

                {Object.keys(week[weekday].events).map((evento) => {
                  return (
                    <div key={evento} className="evento-list">
                      {evento} - fin
                      <p>{week[weekday].events[evento].title}</p>
                      <a href={week[weekday].events[evento].link} target="blank">
                        <button>Ir al evento</button>
                      </a>
                    </div>
                  )
                })}
                <br/>
              </>
            }
          </div>
        )
      })}
    </div>
  );
}

export default CalendarList;
