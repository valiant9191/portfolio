import React from "react";
import "./input.scss";

const Input = ({
  inputId,
  typeInput,
  nameInput,
  textInput,
  placeholderInput,
}) => {
  return (
    <div className="Input">
      <input
        className="input-field"
        id={inputId}
        type={typeInput}
        name={nameInput}
        placeholder={placeholderInput}
      >
        {textInput}
      </input>
      <label htmlFor={inputId} className="label-input"></label>
    </div>
  );
};

export default Input;
