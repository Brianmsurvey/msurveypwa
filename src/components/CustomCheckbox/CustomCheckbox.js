import React, { Component } from "react";

class CustomCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_checked: props.isChecked ? true : false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ is_checked: !this.state.is_checked });
  }
  render() {
    const { isChecked, number, onChanging, label, inline, rest } = this.props;
    const classes =
      inline !== undefined ? "checkbox checkbox-inline" : "checkbox";
    return (
      <div className={classes}>
        <input
          id={number}
          type="checkbox"
          onChange={onChanging}
          checked={isChecked}
          {...rest}
        />
        <label htmlFor={number}>{label}</label>
      </div>
    );
  }
}

export default CustomCheckbox;
