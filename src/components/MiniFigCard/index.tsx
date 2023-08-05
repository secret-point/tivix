import React from "react";
import styled from "styled-components";
import { MiniFigTypes } from "../../types/types";
import { SHOW_DETAILS } from "../../utils/constant";
import MiniFigProfile from "../MiniFigProfile";

type MiniFigCardProps = {
  // imgSrc: string;
  // name: string;
  isSelected: boolean;
  setCurMiniFig: () => void;
  miniFig: MiniFigTypes;
};

const CardWrapper = styled.div<{ isSelected: boolean }>`
  height: fit-content;
  background-color: white;
  padding: 0.5rem;
  border-radius: 6%;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? "0px 0px 10px 10px #f4852c" : "none"};
`;

export const ShowDetailsText = styled.p`
  font-family: "Oswald", sans-serif;
  color: #f4852c;
  font-weight: 600;
  margin: 0;
`;

const MiniFigCard: React.FC<MiniFigCardProps> = ({
  miniFig,
  isSelected,
  setCurMiniFig,
}) => {
  const { set_img_url: imgSrc, name } = miniFig;
  return (
    <CardWrapper onClick={() => setCurMiniFig()} isSelected={isSelected}>
      <MiniFigProfile imgSrc={imgSrc} name={name} />
      <ShowDetailsText>{SHOW_DETAILS}</ShowDetailsText>
    </CardWrapper>
  );
};

export default MiniFigCard;
