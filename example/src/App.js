import React, { Component } from 'react';

import AuthenticationTokenComponent from 'wirecase-authentication-token';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Wirecase Authentication Token Demo</h1>
        <AuthenticationTokenComponent json={testData} />
        <p>Following Input using wirecase-authentication-token</p>
      </div>
    );
  }
}
