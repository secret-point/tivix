import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  width: fit-content;
  height: 200px;
`;

export const MiniFigName = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  color: black;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 250px;
  text-align: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface MiniFigProfileProps {
  imgSrc: string;
  name: string;
}

const MiniFigProfile: React.FC<MiniFigProfileProps> = ({ imgSrc, name }) => {
  return (
    <ProfileWrapper>
      <ImageWrapper>
        <Image src={imgSrc} alt={name} />
      </ImageWrapper>
      <MiniFigName>{name}</MiniFigName>
    </ProfileWrapper>
  );
};

export default MiniFigProfile;
