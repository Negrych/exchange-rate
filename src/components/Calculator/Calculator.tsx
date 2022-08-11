import React from "react";
import { useForm, Controller, useFormState } from "react-hook-form";

import { IForm } from "../../interfaces/dataInterface";

import { inputValidation } from "../../validator/validator";

import Input from "../Input/Input";

import Select from "../Select/Select";

import { exchangerFunction } from "../../functions/exchangerFunction";

import { useAppSelector } from "../../hooks/redux";

import calculatorStyle from "./calculatorStyle.module.scss";

const Calculator = () => {
  const { data } = useAppSelector((state) => state.dataReducer);
  const { control, watch } = useForm<IForm>({
    mode: "onChange",
  });

  const { errors } = useFormState({ control });

  watch(async (e) => {
    const selectCollections = document.getElementsByTagName("select");
    const firstSelect = selectCollections[0];
    const secondSelect = selectCollections[1];
    if (data.length) {
      const obj = {
        firstOptions: firstSelect.selectedOptions[0].label,
        secondOptions: secondSelect.selectedOptions[0].label,
        data: data,
      };
      exchangerFunction(obj);
    }
  });

  return (
    <div className={calculatorStyle.container}>
      <form>
        <Controller
          control={control}
          name={"firstInput"}
          rules={inputValidation}
          render={({ field }) => (
            <Input
              id={"firstInput"}
              name={"firstInput"}
              field={field}
              errors={errors}
              read={false}
            />
          )}
        />
        <Controller
          control={control}
          name={"firstSelect"}
          render={({ field }) => <Select name={"firstSelect"} field={field} />}
        />
        <Controller
          control={control}
          name={"secondInput"}
          rules={inputValidation}
          render={({ field }) => (
            <Input
              id={"secondInput"}
              name={"secondInput"}
              field={field}
              errors={errors}
              read={true}
            />
          )}
        />
        <Controller
          control={control}
          name={"secondSelect"}
          render={({ field }) => <Select name={"secondSelect"} field={field} />}
        />
        <button type={"reset"}>Reset</button>
      </form>
    </div>
  );
};

export default Calculator;
