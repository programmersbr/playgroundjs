//https://www.freecodecamp.org/portuguese/learn/front-end-development-libraries/react/use-default-props
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
// Altere o código abaixo desta linha
ShoppingCart.defaultProps = { items: 0 }