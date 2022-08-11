import React, { FC } from "react";

interface IProps {
  id: string;
  field: {
    onChange: (e: any) => any;
  };
  name: string;
  errors: any;
  read: boolean;
}

const Input: FC<IProps> = ({ id, field, name, errors, read }) => {
  return (
    <label>
      <input
        id={id}
        type="text"
        readOnly={read}
        onChange={(e) => {
          field.onChange(e);
        }}
        name={name}
      />
      <span>{errors?.firstInput?.message}</span>
    </label>
  );
};

export default Input;
