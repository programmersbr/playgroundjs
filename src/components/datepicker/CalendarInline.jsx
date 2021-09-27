// import { useState } from 'react'

// import DatePicker from 'react-datepicker'

// export default class CalendarDefault = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   return (
//     <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
//   );
// };

import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class CalendarInline extends Component {
  state = {
    startDate: new Date(),
  };

  render() {
    const { startDate } = this.state;
    return <DatePicker className="calendario"
        selected={startDate} 
        onChange={this.handleChange} 
        inline
    />;
  }

  handleChange = (startDate) => {
    this.setState({
      startDate,
    });
  };
}

export default CalendarInline;