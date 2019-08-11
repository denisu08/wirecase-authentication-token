import React, { Component } from "react";

import AuthenticationTokenComponent from "wirecase-authentication-token";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

export default class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
    return (
      <div className="mainPanel">
        <h1>Wirecase Authentication Token Demo</h1>
        <p>Following Input using wirecase-authentication-token</p>
        <AuthenticationTokenComponent
          required
          inline
          label="Auth Token"
          placeholder="input token here..."
          maxLength={6}
          value={{
            authType: "softToken",
            challenge: `${Math.ceil(Math.random() * 999999)}`
          }}
          // isError
          // errorMessage="Sample Error"
        />
      </div>
    );
  }
}
