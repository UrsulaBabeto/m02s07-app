import { createContext, useState } from "react";

export const FormContext = createContext({
  formData: {},
  setFormData: () => {},
});

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    nickname: "",
    idade: "",
    email: "",
    senha: "",
  });

  return (
    <>
      <FormContext.Provider value={{ formData, setFormData }}>{children}</FormContext.Provider>
    </>
  );
};
