import React from "react";

import { useAppSelector } from "../../hooks/redux";

import headerStyle from "./headerStyle.module.scss";
const Header = () => {
  const { data } = useAppSelector((state) => state.dataReducer);
  return (
    <div className={headerStyle.container}>
      {data &&
        data.map((value, index) => (
          <div key={index}>
            <span>{value.ccy}</span>: {value.buy} <span>{value.base_ccy}</span>{" "}
            <span>/</span>
            {value.sale} <span>{value.base_ccy}</span>
          </div>
        ))}
    </div>
  );
};

export default Header;
