import { IExchange } from "../interfaces/dataInterface";

export const exchangerFunction = ({
  firstOptions,
  secondOptions,
  data,
}: any) => {
  const firstInput = document.getElementById("firstInput") as HTMLInputElement;
  const secondInput = document.getElementById(
    "secondInput"
  ) as HTMLInputElement;

  if (firstOptions === "UAN") {
    if (firstOptions === "UAN" && secondOptions === "UAN") {
      secondInput.value = firstInput.value;
    }
    const secondMoney = data.find(
      (value: IExchange) => value.ccy === secondOptions
    );
    const result = +firstInput.value / +secondMoney.buy;
    secondInput.value = result.toString();
  } else if (secondOptions === "UAN") {
    if (firstOptions === "UAN" && secondOptions === "UAN") {
      firstInput.value = secondInput.value;
    }
    const firstMoney = data.find(
      (value: IExchange) => value.ccy === firstOptions
    );
    const result = +firstMoney.buy * +firstInput.value;
    secondInput.value = result.toString();
  }
  const firstMoney = data.find(
    (value: IExchange) => value.ccy === firstOptions
  );
  const secondMoney = data.find(
    (value: IExchange) => value.ccy === secondOptions
  );
  const result = (+firstInput.value * +firstMoney.buy) / +secondMoney.buy;
  secondInput.value = result.toString();
};
