import React from "react";
import styled from "styled-components";

type TypographyProps = {
  text?: string;
  color?: string;
  size?: string;
};

const TextField = styled.p<TypographyProps>`
  margin: 0;
  font-family: "Changa One", cursive;
  font-size: ${(props) =>
    props.size === "sm" ? "25px" : props.size === "lg" ? "50px" : "37px"};
  color: ${(props) => props.color};
`;

const LegoTypography: React.FC<TypographyProps> = ({ text, color, size }) => {
  return (
    <TextField color={color} size={size}>
      {text}
    </TextField>
  );
};

export default LegoTypography;
