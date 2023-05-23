// ./components/FormInput.jsx
import { useState } from "react";

const inputStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  color: '#333',
  backgroundColor: '#fff',
  width: '250px',
  display: 'block',
};

function FormInput(props) {
  const [inputType] = useState(props.type);
  const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    const newValue = event.target.value
    setInputValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };

  return (
    <>
      <span>{props?.title? props.title : "Untitled input"}: &nbsp; </span>
      <input
        type={inputType}
        value={inputValue}
        name="input-form"
        onChange={handleChange}
        placeholder={props?.placeholder}
        autoComplete={props?.autocomplete ? props.autocomplete : "off"}
        style={inputStyle} />
      <br />
    </>
  );
};

export default FormInput;
