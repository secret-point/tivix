import { useCallback, useEffect, useState } from "react";
import LegoButton from "../components/LegoButton";
import LegoTypography from "../components/LegoTypography";
import { CHOOSE_YOUR_MINIFIG, BUTTON_PROCEED_TEXT } from "../utils/constant";
import { Section } from "./Home";

import { fetchMiniFigs, setCurMiniFig } from "../store/slices/miniFigSlice";
import { RootState, useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { MiniFigTypes } from "../types/types";
import MiniFigCard from "../components/MiniFigCard";

const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const MinFig: React.FC = () => {
  const dispatch = useAppDispatch();

  const { miniFigs, curMiniFig } = useSelector(
    (state: RootState) => state.miniFigReducer
  );
  const handleSelect = (miniFig: MiniFigTypes) => {
    dispatch(
      setCurMiniFig(
        miniFig.name === curMiniFig.name
          ? { name: "", set_img_url: "" }
          : miniFig
      )
    );
  };

  useEffect(() => {
    if (!miniFigs.length) dispatch(fetchMiniFigs());
  }, []);

  return (
    <Section>
      <LegoTypography text={CHOOSE_YOUR_MINIFIG} color="white" size="sm" />
      <CardContainer>
        {miniFigs.map((miniFig: MiniFigTypes) => (
          <MiniFigCard
            miniFig={miniFig}
            key={miniFig.set_num}
            isSelected={curMiniFig?.name === miniFig.name}
            setCurMiniFig={() => handleSelect(miniFig)}
          />
        ))}
      </CardContainer>
      <LegoButton
        text={BUTTON_PROCEED_TEXT}
        url="/shipping-details"
        isDisabled={!curMiniFig?.name}
        boxShadow={true}
      />
    </Section>
  );
};

export default MinFig;
