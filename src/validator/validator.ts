const REQUIRED_FIELD = "Required input";

export const inputValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[0-9]/)) {
      return true;
    }
    return "Only numbers";
  },
};
