import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { IForm } from "../../interfaces/dataInterface";
import Select from "../Select/Select";

import calculatorStyle from "./calculatorStyle.module.scss";
const Calculator = () => {
  const { register, handleSubmit, reset, watch } = useForm<IForm>();
  const submit: SubmitHandler<IForm> = (data) => {
    reset();
  };
  watch((e) => console.log(e));
  return (
    <div className={calculatorStyle.container}>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          <input type="text" {...register("firstInput")} />
        </label>
        <Select />
        <label>
          <input type="text" {...register("secondInput")} />
        </label>
        <Select />
        <button>Reset</button>
      </form>
    </div>
  );
};

export default Calculator;
