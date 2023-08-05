import styled from "styled-components";
import {
  MiniFigPartTypes,
  MiniFigPartsTypes,
  MiniFigTypes,
} from "../../types/types";
import { SHIPPING_DETAILS_SUMMARY } from "../../utils/constant";
import LegoButton from "../LegoButton";
import LegoTypography from "../LegoTypography";
import MiniFigPart from "../MiniFigParts/MiniFigPart";
import MiniFigProfile, { MiniFigName } from "../MiniFigProfile";

const SummaryCardWrapper = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 10px;
  height: calc(100vh - 96px);
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

interface SummaryCardProps {
  miniFig: MiniFigTypes | { name: string; set_img_url: string };
  miniFigParts: MiniFigPartTypes[];
  count: number;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  miniFig,
  miniFigParts,
  count,
}) => {
  const { set_img_url: imgSrc, name } = miniFig;
  return (
    <SummaryCardWrapper>
      <LegoTypography text={SHIPPING_DETAILS_SUMMARY} size="md" />
      <MiniFigProfile name={name} imgSrc={imgSrc} />
      {count && (
        <MiniFigName>There are {count} parts in this minifig</MiniFigName>
      )}
      {miniFigParts?.map((part: MiniFigPartTypes) => (
        <MiniFigPart key={part.id} part={part} />
      ))}
    </SummaryCardWrapper>
  );
};

export default SummaryCard;
