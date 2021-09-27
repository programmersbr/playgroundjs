//https://www.freecodecamp.org/portuguese/learn/front-end-development-libraries/react/override-default-props

import { Component } from 'react'

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

export default class ShoppingCart extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <Items quantity= {10}  />
  }
};