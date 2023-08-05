import styled from "styled-components";
import { MiniFigPartTypes } from "../../types/types";
import { ShowDetailsText } from "../MiniFigCard";
import { MiniFigName } from "../MiniFigProfile";

interface MiniFigPartProps {
  part: MiniFigPartTypes;
}

const PartWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const PartDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const Image = styled.img`
  width: 80px;
`;

const MiniFigPart: React.FC<MiniFigPartProps> = ({ part }) => {
  const { part_img_url: imgSrc, print_of: id, name } = part.part;
  return (
    <PartWrapper>
      <Image src={imgSrc} />
      <PartDetailsWrapper>
        <MiniFigName>{name}</MiniFigName>
        <ShowDetailsText>{id}</ShowDetailsText>
      </PartDetailsWrapper>
    </PartWrapper>
  );
};

export default MiniFigPart;
