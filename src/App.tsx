import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { getAllData } from "./store/dataSlice";
import Header from "./components/Header/Header";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);
  const { data } = useAppSelector((state) => state.dataReducer);
  console.log(data);
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
