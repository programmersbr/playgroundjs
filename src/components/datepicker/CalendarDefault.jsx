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

class CalendarDefault extends Component {
  state = {
    startDate: new Date(),
  };

  render() {
    const { startDate } = this.state;
    return <DatePicker selected={startDate} onChange={this.handleChange} />;
  }

  handleChange = (startDate) => {
    this.setState({
      startDate,
    });
  };
}

export default CalendarDefault;