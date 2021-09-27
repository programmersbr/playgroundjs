//https://www.freecodecamp.org/portuguese/learn/front-end-development-libraries/react/access-props-using-this-props

import { Component } from 'react'

class ReturnTempPassword extends Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
        <div>
            { /* Altere o código abaixo desta linha */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            { /* Altere o código acima desta linha */ }
        </div>
    );
  }
};

export default class ResetPassword extends Component {
  // constructor(props) {
  //   super(props);

  // }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Altere o código abaixo desta linha */ }
          <ReturnTempPassword tempPassword="playground" />
          { /* Altere o código acima desta linha */ }
        </div>
    );
  }
};