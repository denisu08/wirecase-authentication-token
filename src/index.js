import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';

export default class AuthenticationTokenComponent extends Component {
  static propTypes = {};

  static styles = {
    td: {
      border: '1px solid #cccccc',
      textAlign: 'left',
      margin: 0,
      padding: '6px 13px',
    },
    th: {
      border: '1px solid #cccccc',
      textAlign: 'left',
      margin: 0,
      padding: '6px 13px',
      fontWeight: 'bold',
    },
  };
  static defaultProps = {};

  render() {
    return (
      <div>
        <Input placeholder="Search..." />
      </div>
    );
  }
}
