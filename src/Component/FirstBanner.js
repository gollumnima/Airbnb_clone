import React from "react";
import styled from "styled-components";

const FirstBanner = () => {
  return (
    <FirstWrapper>
      <BoldWords>에어비앤비 둘러보기</BoldWords>
      <BannerList>
        <ListWrapper>
          <ImageWrapper>
            <ListPic house></ListPic>
          </ImageWrapper>
          <SpaceWords>숙소</SpaceWords>
        </ListWrapper>
        <ListWrapper>
          <ImageWrapper>
            <ListPic experience></ListPic>
          </ImageWrapper>
          <SpaceWords>체험</SpaceWords>
        </ListWrapper>
        <ListWrapper>
          <ImageWrapper>
            <ListPic adventure></ListPic>
          </ImageWrapper>
          <SpaceWords>어드벤처</SpaceWords>
        </ListWrapper>
        <ListWrapper>
          <ImageWrapper>
            <ListPic restaurant></ListPic>
          </ImageWrapper>
          <SpaceWords>레스토랑</SpaceWords>
        </ListWrapper>
      </BannerList>
    </FirstWrapper>
  );
};

export default FirstBanner;

const FirstWrapper = styled.div`
  width: 100%;
  background-color: transparent;
  box-sizing: border-box;
  display: block;
`;

const BoldWords = styled.h1`
  color: #484848;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
`;

const BannerList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ListWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  border-width: 0px 5px;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex: 0 0 33.3333%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px;
  text-align: left;
  border-image: initial;
  border-radius: 3px;
  overflow: hidden;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  width: 96px;
  height: 72px;
  overflow: hidden;
`;
const ListPic = styled.a`
  width: 100%;
  height: 100%;
  display: inline-block;
  background-image: ${props =>
    props.adventure
      ? `url("https://a0.muscache.com/4ea/air/v2/pictures/38f2bfd6-1f4d-46d7-babf-61657deef302.jpg?t=r:w375-h250-sfit,e:fjpg-c80")`
      : props.experience
      ? `url("https://a0.muscache.com/4ea/air/v2/pictures/a77ee672-e790-4362-8cc5-52bec1371ece.jpg?t=r:w375-h250-sfit,e:fjpg-c80")`
      : props.house
      ? `url("https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?t=r:w375-h250-sfit,e:fjpg-c80")`
      : `url("https://a0.muscache.com/4ea/air/v2/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?t=r:w375-h250-sfit,e:fjpg-c80")`};

  background-size: cover;
`;

const SpaceWords = styled.h3`
  color: #484848;
  font-size: 16px;
  font-weight: 800;
  padding: 14px 16px 10px;
  white-space: normal;
  align-content: center;
  padding-top: 30px;
`;
