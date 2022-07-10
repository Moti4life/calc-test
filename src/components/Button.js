import React from "react";

const Button = (props) => {
  return (
    <input
      type="button"
      value={props.label}
      onClick={props.handleClick}
      className={props.class}
    ></input>
  );
};

export default Button;
