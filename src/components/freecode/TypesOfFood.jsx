// https://www.freecodecamp.org/portuguese/learn/front-end-development-libraries/react/render-a-class-component-to-the-dom

import React from 'react'
import ReactDOM from 'react-dom'

import Fruits from './Fruits'
import Vegetables from './Vegetables'

export default class TypesOfFood extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
        <Vegetables />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('root'))