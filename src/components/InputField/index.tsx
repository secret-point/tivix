import React from "react";
import styled from "styled-components";
import {
  Path,
  useForm,
  UseFormRegister,
  SubmitHandler,
  FieldError,
} from "react-hook-form";
import { IFormInput } from "../../types/types";

// interface InputFieldProps {
//   label: Path<IFormValues>;
//   value?: string;
//   error?: boolean;
// }

type InputProps = {
  label: Path<IFormInput>;
  register: UseFormRegister<IFormInput>;
  required?: boolean;
  error?: string;
};

const TextInput = styled.input`
  background-color: #dfdfdf;
  color: black;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding-left: 0.5rem;
`;

const LabelField = styled.label`
  font-family: "Oswald", sans-serif;
  color: white;
`;

const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const ErrorText = styled.label`
  font-family: "Oswald", sans-serif;
  color: #f14b4b;
`;

const InputField = ({ label, register, required, error }: InputProps) => {
  return (
    <InputFieldWrapper>
      <LabelField>{label}</LabelField>
      <TextInput
        {...register(label, {
          minLength: { value: 3, message: "Fill out the input correctly." },
          required: "!!!!",
        })}
      />
      {error && <ErrorText>* {error}</ErrorText>}
    </InputFieldWrapper>
  );
};

export default InputField;
