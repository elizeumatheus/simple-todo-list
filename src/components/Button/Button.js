import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { children, type, onClick } = this.props;

    return (
      <button type={type} className="button" onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
