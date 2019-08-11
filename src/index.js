import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import { merge, get } from "lodash/object";
import { Icon, Form, Label, Segment } from "semantic-ui-react";

// const ErrorWrapper = styled.div`
//   color: ${props => (props.theme ? props.theme.errorColor : "red")};
// `;
const MAX_WIDTH = "90%";

export default class AuthenticationTokenComponent extends React.Component {
  static defaultProps = {
    label: "Token",
    challengeLabel: "Challenge",
    regexValidation: "^[0-9]*$",
    listTypeExtra: ["softToken", "hardToken"]
  };
  static propTypes = {
    isFullWidth: PropTypes.bool,
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
    theme: PropTypes.any
  };

  static styles = {
    td: {
      border: "1px solid #cccccc",
      textAlign: "left",
      margin: 0,
      padding: "6px 13px"
    },
    th: {
      border: "1px solid #cccccc",
      textAlign: "left",
      margin: 0,
      padding: "6px 13px",
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super();
    this.state = {
      authForm: {
        authType: get(props, "value.authType" || ""),
        challenge: get(props, "value.challenge" || ""),
        token: get(props, "value.token" || "")
      },
      type: "password"
    };
  }

  prepareChange(e, valueChange) {
    const { initial } = this.state;
    if (initial) clearTimeout(initial);

    this.setState({
      initial: window.setTimeout(() => {
        this.handleInputChange(e, valueChange);
      }, 1000),
      value: valueChange.value
    });
  }

  handleInputChange = (e, { value }) => {
    const { initial } = this.state;
    if (initial) clearTimeout(initial);

    const { regexValidation } = this.props;
    if (value.match(regexValidation) != null) {
      const newAuthForm = merge(this.state.authForm, { token: value });
      this.setState({
        authForm: newAuthForm,
        initial: window.setTimeout(() => {
          const { onChange } = this.props;
          if (onChange) {
            onChange(newAuthForm);
          }
        }, 1000)
      });
    }
  };

  showHidePassword(e) {
    e.preventDefault();
    e.stopPropagation();
    return this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  render() {
    const {
      label,
      isFullWidth,
      challengeLabel,
      placeholder,
      inline,
      maxLength,
      listTypeExtra,
      isError,
      errorMessage,
      required,
      theme
    } = this.props;
    const { authForm, type = "password" } = this.state;

    return (
      <Segment
        compact={isFullWidth === undefined ? true : !isFullWidth}
        fluid={isFullWidth === undefined ? false : isFullWidth}
        className={isError ? "animated shake faster" : null}
      >
        <Form>
          {listTypeExtra.includes(authForm.authType) && authForm.challenge ? (
            <Form.Field inline={inline === undefined ? false : inline} fluid>
              <label>{`${challengeLabel}:`}</label>
              <Label size="big" style={{ width: MAX_WIDTH }}>
                {authForm.challenge}
              </Label>
            </Form.Field>
          ) : (
            ""
          )}
          <Form.Input
            style={{ width: MAX_WIDTH }}
            required={required === undefined ? false : required}
            inline={inline === undefined ? false : inline}
            label={`${label}:`}
            type={type}
            placeholder={placeholder}
            value={authForm.token}
            onChange={this.handleInputChange}
            maxLength={maxLength}
            icon={
              <Icon
                name={type === "password" ? "eye slash" : "eye"}
                link
                onClick={e => this.showHidePassword(e)}
              />
            }
          />
          {isError ? (
            // <ErrorWrapper>
            // </ErrorWrapper>
            <p style={{ color: theme ? theme.errorColor : "red" }}>
              {errorMessage}
            </p>
          ) : null}
        </Form>
      </Segment>
    );
  }
}
