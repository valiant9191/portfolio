import "./input.scss";

function Input({ inputId, typeInput, nameInput, textInput, placeholderInput }) {
  return (
    <div className="Input">
      <label htmlFor={inputId} className="label-input">
        <input
          className="input-field"
          id={inputId}
          type={typeInput}
          name={nameInput}
          placeholder={placeholderInput}
          value={{ textInput }}
        />
      </label>
    </div>
  );
}

export { Input };
