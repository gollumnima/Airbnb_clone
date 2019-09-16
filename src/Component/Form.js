import React, { Component } from "react";
import styled from "styled-components";

class Form extends Component {
  render() {
    return (
      <FormDiv>
        <FormWrapper>
          <BigWords>특색 있는 숙소와 즐길 거리를 예약하세요.</BigWords>
          <FormInput>
            <FirstDiv>
              <SmallWords>목적지</SmallWords>
              <InputWrapper>
                <InputLong placeholder="모든 위치"></InputLong>
              </InputWrapper>
            </FirstDiv>
            <SecondDiv>
              <SpaceDivider>
                <SmallWords>체크인</SmallWords>
                <InputWrapper>
                  <InputShort></InputShort>
                </InputWrapper>
              </SpaceDivider>
              <SpaceDivider>
                <SmallWords>체크아웃</SmallWords>
                <InputWrapper>
                  <InputShort></InputShort>
                </InputWrapper>
              </SpaceDivider>
            </SecondDiv>
            <ThirdDiv>
              <SmallWords>인원</SmallWords>
              <InputWrapper>
                <InputLong placeholder="인원"></InputLong>
              </InputWrapper>
            </ThirdDiv>
            <BtnDiv>
              <SearchBtn>검색</SearchBtn>
            </BtnDiv>
          </FormInput>
        </FormWrapper>
      </FormDiv>
    );
  }
}

export default Form;

const FormDiv = styled.div`
  position: relative;
  margin: 0 auto;
  position: relative;
  max-width: 1760px;
  padding-right: 80px;
  padding-left: 80px;
  background-color: transparent;
  z-index: 1;
  top: 120px;
  padding-left: 121px;
`;

const FormWrapper = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 32px;
  padding-bottom: 24px;
  width: 380px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
`;

const BigWords = styled.h1`
  font-size: 30px;
  line-height: 36px;
  letter-spacing: normal;
  color: #484848;
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: 600;
`;

const FormInput = styled.div``;

const FirstDiv = styled.div``;

const SecondDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ThirdDiv = styled.div``;

const SpaceDivider = styled.div``;

const SmallWords = styled.h3`
  font-size: 13px;
  font-weight: 600;
  margin: 10px;
`;

const InputWrapper = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  position: relative;
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  display: flex;
  height: 48px;
  width: 100%;
`;

const InputLong = styled.input.attrs({
  role: "combobox"
})`
  border: 0;
  font-size: 17px;
  width: 100%;
  background-color: transparent;
`;

const InputShort = styled.input.attrs({ placeholder: "년/월/일" })`
  border: 0;
  font-size: 17px;
  width: 100%;
  background-color: transparent;
`;

const BtnDiv = styled.div`
  text-align: right;
`;
const SearchBtn = styled.button.attrs({
  type: "submit"
})`
  background-color: #e65460;
  color: white;
  width: 77.45px;
  height: 48px;
  border-style: none;
  color: white;
  font-weight: 600;
  font-size: 17px;
  border-radius: 3px;
  margin-top: 25px;
`;
