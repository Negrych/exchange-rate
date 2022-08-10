import React, { useEffect } from "react";

import { useAppDispatch } from "./hooks/redux";
import { getAllData } from "./store/dataSlice";
import Header from "./components/Header/Header";
import Calculator from "./components/Calculator/Calculator";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Calculator />
    </div>
  );
};

export default App;
