//https://www.freecodecamp.org/learn/front-end-development-libraries/react/review-using-props-with-stateless-functional-components

// Um componente funcional stateless (sem estado) é qualquer função que você escreve 
//  que aceita props e retorna JSX. Um componente stateless (sem estado), 
//  por outro lado, é uma classe que estende React.Component, mas não usa estado interno 
//  Finalmente, um componente stateful (com estado) é um componente de classe 
//  que mantém seu próprio estado interno. 
//  Você pode ver componentes de estado referidos simplesmente como componentes 
//  ou componentes do React.

// Um padrão comum é tentar minimizar statefulness e criar componentes funcionais sem estado, 
//  sempre que possível. Isso ajuda a conter sua gestão de estado para uma área específica 
//  de sua aplicação. Por sua vez, isso melhora o desenvolvimento e a manutenção do seu aplicativo, 
//  tornando mais fácil acompanhar como alterações no estado afetam seu comportamento.

import { Component } from 'react'
import PropTypes from 'prop-types'

export default class CampSite extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <Camper name='Camper2'/>
      </div>
    );
  }
};
// Altere o código abaixo desta linha
const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
  name: "CamperBot"
};

Camper.propTypes = {
  name: PropTypes.string.isRequired
};