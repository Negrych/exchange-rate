import React from "react";
import "./selectStyle.module.scss";
const Select = () => {
  return (
    <>
      <select name="select">
        <option value="value1">USD</option>
        <option value="value2">EUR</option>
        <option value="value3">UAN</option>
      </select>
    </>
  );
};

export default Select;
