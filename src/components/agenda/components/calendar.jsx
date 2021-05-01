import './calendar.css';

const Calendar = ({events}) => {
  const weekdays = ['Lunes','Martes','Miércoles','Jueves','Viernes'];
  const hours = ['11:00','12:00','13:00','14:00','15:00','16:00','17:00'];

  return (
    <div className="calendar">
      <div className="calendar-row">
        <div/>
        {weekdays.map((weekday) => {
          return (
            <div className="calendar-title" key={'title'+weekday}>
              <p>{events[weekday].day}</p>
              {weekday}
            </div>
          )
        })}
      </div>
      {hours.map((hour) => {
        return (
          <div className="calendar-row" key={hour}>
            <div className="calendar-hour">{hour}</div>
            {weekdays.map((weekday) => {
              return (
                <div className="calendar-cell" key={weekday}>
                  {events[weekday][hour] &&
                    <div className="evento">
                      <p>{events[weekday][hour].title}</p>
                      <button>Ir al evento</button>
                    </div>
                  }
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Calendar;
