import React, { Component } from 'react';

import AuthenticationTokenComponent from 'wirecase-authentication-token';

export default class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div>
        <h1>Wirecase Authentication Token Demo</h1>
        <AuthenticationTokenComponent />
        <p>Following Input using wirecase-authentication-token</p>
      </div>
    );
  }
}
