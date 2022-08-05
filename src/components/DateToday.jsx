import React from 'react';

class DateToday extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date (),
      day: ["Воскресенье","Понедельник","Вторник",
        "Среда","Четверг","Пятница","Суббота"],
      month: ["января","февраля","марта","апреля","мая","июня",
      "июля","августа","сентября","октября","ноября","декабря"]
    };
  }

  render () {
    return (
      <div className="time">
        <div id="date" className="date-item">
          <p>{this.state.day[this.state.time.getDay()]+" " 
            + this.state.time.getDate()+ " " 
            + this.state.month[this.state.time.getMonth()] + " " 
            + this.state.time.getFullYear() + " г."}</p>
        </div>
      </div>
    )
  }
}

export default DateToday;