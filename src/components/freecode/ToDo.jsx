// https://www.freecodecamp.org/portuguese/learn/front-end-development-libraries/react/pass-an-array-as-props

import { Component } from 'react'

const List = (props) => {
  return <p>{props.tasks.join(', ')}</p>
};

export default class ToDo extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["today1", "today2", "today3"]} />
        <h2>Tomorrow</h2>
        <List tasks={["tomorrow1", "tomorrow2", "tomorrow3"]} />
      </div>
    );
  }
};