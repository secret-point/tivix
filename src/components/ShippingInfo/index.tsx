import styled from "styled-components";
import {
  shippingDetailFields,
  SHIPPING_DETAILS_CAPTION,
} from "../../utils/constant";
import InputField from "../InputField.tsx";
import LegoTypography from "../LegoTypography";
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from "../../types/types";
import { Path } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { submitShippingDetails } from "../../store/slices/miniFigSlice";

interface ShippingInfoProps {}

const ShippingInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8rem;
  gap: 2rem;
  width: 100%;
`;

const InputDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SubmitButton = styled.button`
  background-color: #018dec;
  color: white;
  border: none;
  border-radius: 10% / 50%;
  height: 50px;
  width: 200px;
  font-family: "Changa One", cursive;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.2rem 2rem;
  position: absolute;
  right: 7rem;
  bottom: 3rem;
`;

const ShippingInfo: React.FC<ShippingInfoProps> = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(submitShippingDetails(data));
    reset();
  };

  return (
    <ShippingInfoWrapper>
      <LegoTypography text={SHIPPING_DETAILS_CAPTION} color="white" />
      <form onSubmit={handleSubmit(onSubmit)}>
        {shippingDetailFields.map((detail, index) => (
          <InputDiv key={`detail${index}`}>
            {detail.map((item) => (
              <InputField
                key={item}
                label={item as Path<IFormInput>}
                register={register}
                error={errors.Name?.message}
              />
            ))}
          </InputDiv>
        ))}
        <InputField
          label={"Surname"}
          register={register}
          error={errors.Name?.message}
        />
        <SubmitButton type="submit">SUBMIT</SubmitButton>
      </form>
    </ShippingInfoWrapper>
  );
};

export default ShippingInfo;
