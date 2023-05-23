// ./components/CustomSelect.jsx
import { useState } from "react";

const selectStyle = {
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  color: '#333',
  backgroundColor: '#fff',
  width: '250px',
  display:'block',
};

function CustomSelect(props) {
  const [data] = useState(props.data);

  let options = data.map((item, index) => (
    <option key={index} value={item}>{item}</option>
  ));

  return (
    <>
      <select
        name="customSearch"
        onChange={(event) => props?.onSelectChange(event)}
        style={selectStyle}>
        <option value="">{props.title}</option>
        {options}
      </select>
      <br />
    </>
  );
}

export default CustomSelect;