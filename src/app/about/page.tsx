'use client';
import styled from 'styled-components';
import { fredoka } from '@/utils/fonts';

export default function About() {
  return (
    <Background>
      <WrapperText>
        <StyledText>
          <h1>aaaa</h1>
        </StyledText>
      </WrapperText>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffb2b2;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.div`
  h1 {
    margin: 0;
    font-size: 150px;
    color: #ca0000;
  }
  h2 {
    line-height: 0.6;
    font-size: 400px;
    color: #ca0000;
  }
`;
