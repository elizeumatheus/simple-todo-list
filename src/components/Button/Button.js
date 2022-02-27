import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { children, onClick } = this.props;

    return (
      <button className="button" onClick={onClick}>
        {children}
      </button>
    );
  }
}

export default Button;
