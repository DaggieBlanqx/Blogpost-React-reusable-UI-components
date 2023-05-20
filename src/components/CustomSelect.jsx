// ./components/CustomSelect.jsx
import React, { useState } from "react";

function CustomSelect(props) {
  const [data] = useState(props.data);
 
  let options = data.map(data => (
    <option key={data.id} value={data.id}>
      {data.name}
    </option>
  ));

  return (
    <select
      name="customSearch"
      className="custom-search-select"
      onChange={(event)=>props?.onSelectChange(event)}
    >
      <option>{props.title}</option>
      {options}
    </select>
  );
}

export default CustomSelect;