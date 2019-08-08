import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Icon } from 'semantic-ui-react';
import * as _ from 'lodash';

const ErrorWrapper = styled.div`
  color: ${props => props.theme.errorColor};
`;
export default class AuthenticationTokenComponent extends Component {
  static defaultProps = {
    label: 'Token',
    challengeLabel: 'Challenge',
    regexValidation: '^[0-9]*$',
    listTypeExtra: ['softToken', 'hardToken'],
  };
  static propTypes = {
    inline: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    challengeLabel: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    regexValidation: PropTypes.string,
    listTypeExtra: PropTypes.array,
    onValueChange: PropTypes.func,
    isError: PropTypes.bool,
    errorMessage: PropTypes.string,
  };

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

  constructor(props) {
    super();
    this.state = {
      authForm: {
        authType: _.get(props, 'value.authType' || ''),
        challenge: _.get(props, 'value.challenge' || ''),
        token: _.get(props, 'value.token' || ''),
      },
      type: 'password',
    };
  }

  handleInputChange = (e, { value }) => {
    const { onValueChange, regexValidation } = this.props;
    if (value.match(regexValidation) != null) {
      const newAuthForm = {
        authForm: Object.assign(this.state.authForm, { token: value }),
      };
      if (onValueChange) {
        onValueChange(newAuthForm);
      }
      this.setState(newAuthForm);
    }
  };

  showHidePassword(e) {
    e.preventDefault();
    e.stopPropagation();
    return this.setState({
      type: this.state.type === 'input' ? 'password' : 'input',
    });
  }

  render() {
    const {
      label,
      challengeLabel,
      placeholder,
      inline,
      maxLength,
      listTypeExtra,
      isError,
      errorMessage,
      required,
    } = this.props;
    const { authForm, type = 'password' } = this.state;

    return (
      <Form>
        <Form.Input
          required={required === undefined ? false : required}
          inline={inline === undefined ? false : inline}
          className={isError ? 'animated shake faster' : null}
          label={`${label} ${
            listTypeExtra.includes(authForm.authType) && authForm.challenge
              ? ` (${challengeLabel} ${authForm.challenge}):`
              : ':'
          }`}
          type={type}
          placeholder={placeholder}
          value={authForm.token}
          onChange={this.handleInputChange}
          maxLength={maxLength}
          icon={
            <Icon
              name={type === 'password' ? 'eye slash' : 'eye'}
              link
              onClick={e => this.showHidePassword(e)}
            />
          }
        />
        {isError ? (
          <ErrorWrapper>
            <p>{errorMessage}</p>
          </ErrorWrapper>
        ) : null}
      </Form>
    );
  }
}
