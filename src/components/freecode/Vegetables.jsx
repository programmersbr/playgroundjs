import { Component } from 'react'
// import ReactDOM from 'react-dom'

export default class Vegetables extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2>Vegetables:</h2>
        <ol>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squash</li>
        </ol>
      </div>
    );
  }
};

// ReactDOM.render(<Vegetables />, document.getElementById('root'))