import { Component } from 'react'
// import ReactDOM from 'react-dom'

export default class Fruits extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <h3>Non-Citrus:</h3>
        <ol>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ol>
        <h3>Citrus:</h3>
        <ol>
          <li>Lemon</li>
          <li>Lime</li>
          <li>Orange</li>
          <li>Grapefruit</li>
        </ol>
      </div>
    );
  }
};

// ReactDOM.render(<Fruits />, document.getElementById('root'))