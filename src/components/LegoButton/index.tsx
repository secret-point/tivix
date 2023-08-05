import React from "react";
import styled from "styled-components";

type ButtonProps = {
  text: string;
  url: string;
  boxShadow: boolean | false;
  isDisabled: boolean;
};

export const Link = styled.a<{ isDisabled: boolean; boxShadow: boolean }>`
  background-color: ${(props) => (props.isDisabled ? "grey" : "#018dec")};
  color: white;
  border: none;
  border-radius: 10% / 50%;
  box-shadow: ${(props) => (props.boxShadow ? "2px 11px 14px black" : "none")};
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
  pointer-events: ${(props) => (props.isDisabled ? "none" : "all")};
  transition: all 0.5s ease-out;
}`;

const LegoButton: React.FC<ButtonProps> = ({
  text,
  boxShadow,
  url,
  isDisabled,
}) => {
  return (
    <Link href={url} isDisabled={isDisabled} boxShadow={boxShadow}>
      {text}
    </Link>
  );
};

export default LegoButton;
