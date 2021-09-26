// https://www.freecodecamp.org/portuguese/learn/front-end-development-libraries/react/pass-props-to-a-stateless-functional-component

import { Component } from 'react'

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date} </p>
    </div>
  );
};

export default class Calendar extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};