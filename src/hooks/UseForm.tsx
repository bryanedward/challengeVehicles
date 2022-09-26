import { useState } from "react";

export const UseForm = (modelForm: any) => {
  const [useInput, setInput] = useState(modelForm);

  const addInput = ({ target }: any) => {
    setInput({
      ...useInput,
      [target.name]: target.value,
    });
  };

  return [useInput, addInput];
};
