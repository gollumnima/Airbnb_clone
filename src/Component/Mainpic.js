import React from "react";
import styled from "styled-components";

const Mainpic = () => {
  return (
    <PicSection>
      <Img src="https://a0.muscache.com/4ea/air/r:w1550-h1037-sfit,e:fjpg-c80/pictures/0ffd8594-f123-43f0-85bb-7ef88c6f0624.jpg"></Img>
      <ParaOregon>
        오리건에 있는 300개 이상의
        <br></br>
        독특한 숙소
      </ParaOregon>
    </PicSection>
  );
};

export default Mainpic;

const PicSection = styled.section`
  display: inline-block;
  vertical-align: bottom;
  height: 48%;
  width: 100%;
`;

const Img = styled.img`
  object-fit: cover;
  vertical-align: bottom;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const ParaOregon = styled.h3`
  color: white;
  font-weight: 600;
  font-size: 15px;
  position: relative;
  text-align: right;
  margin-top: 330px;
`;
