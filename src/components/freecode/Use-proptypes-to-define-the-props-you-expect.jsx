//https://www.freecodecamp.org/portuguese/learn/front-end-development-libraries/react/use-proptypes-to-define-the-props-you-expect
//https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
//https://www.npmjs.com/package/prop-types

import { Component } from 'react'
import PropTypes from 'prop-types'

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Altere o código abaixo desta linha
Items.propTypes = { quantity: PropTypes.number.isRequired }
// Altere o código acima desta linha

Items.defaultProps = {
  quantity: 0
};

export default class ShoppingCart extends Component {
  render() {
    return <Items />
  }
};