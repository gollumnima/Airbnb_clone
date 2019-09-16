import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Form from "./Component/Form";
import Bar from "./Component/Bar";
import reset from "styled-reset";
import Mainpic from "./Component/Mainpic";
import AirStart from "./Component/AirStart";

const GlobalStyle = createGlobalStyle`
  ${reset};
body {
    margin : 0;
    padding: 0;
    width: 100%;
}`;

class Air extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ContentWrap>
          <Bar></Bar>
          <Form></Form>
          <Mainpic></Mainpic>
          <AirStart></AirStart>
        </ContentWrap>
      </>
    );
  }
}

export default Air;

const ContentWrap = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
