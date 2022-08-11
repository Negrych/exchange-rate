import React from "react";
import "./selectStyle.module.scss";
const Select = ({ name, field }: any) => {
  return (
    <select
      name={name}
      defaultValue={"default"}
      onChange={(e) => {
        field.onChange(e);
      }}
    >
      <option value="" defaultValue={"USD"}>
        USD
      </option>
      <option value="default" defaultValue={"EUR"}>
        EUR
      </option>
      <option value="" defaultValue={"UAN"}>
        UAN
      </option>
    </select>
  );
};

export default Select;
