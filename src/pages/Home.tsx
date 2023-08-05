import React from "react";
import styled from "styled-components";
import LegoButton from "../components/LegoButton";
import LegoTypography from "../components/LegoTypography";
import { LEGO_MINIFIGS_CAPTION, BUTTON_GO_TEXT } from "../utils/constant";

export const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

const Home: React.FC = () => {
  return (
    <Section>
      <LegoTypography text={LEGO_MINIFIGS_CAPTION} color="white" size="lg" />
      <LegoButton
        text={BUTTON_GO_TEXT}
        url="/choose-minfig"
        isDisabled={false}
        boxShadow={true}
      />
    </Section>
  );
};

export default Home;
