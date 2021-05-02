import './calendar-grid.css';

const CalendarGrid = ({week}) => {
  const hours = ['11:00','12:00','13:00','14:00','15:00','16:00','17:00'];

  return (
    <div className="calendar">
      <div className="calendar-row">
        <div/>
        {Object.keys(week).map((weekday) => {
          return (
            <div className="calendar-title" key={'title'+weekday}>
              <p>{week[weekday].day}</p>
              {weekday}
            </div>
          )
        })}
      </div>
      {hours.map((hour) => {
        return (
          <div className="calendar-row" key={hour}>
            <div className="calendar-hour">{hour}</div>
            {Object.keys(week).map((weekday) => {
              return (
                <div className="calendar-cell" key={weekday}>
                  {week[weekday].events?.[hour] &&
                    <div className="evento">
                      <p>{week[weekday].events[hour].title}</p>
                      <a href={week[weekday].events[hour].link} target="blank">
                        <button>Ir al evento</button>
                      </a>
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

export default CalendarGrid;
