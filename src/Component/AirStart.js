import React from "react";
import styled from "styled-components";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";

const AirStart = () => {
  return (
    <AirWrapper>
      <FirstBanner></FirstBanner>
      <SecondBanner></SecondBanner>
    </AirWrapper>
  );
};

export default AirStart;

const AirWrapper = styled.div`
  width: 100%;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
`;
