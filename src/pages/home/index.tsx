'use client';
import styled from 'styled-components';

import { passionOne, fredoka } from '@/utils/fonts';
import Link from 'next/link';

export default function Home() {
  return (
    <Background className={fredoka.className}>
      <WrapperText>
        <StyledText>
          <h1>embroidery</h1>

          <WrapperLoginAndAbout>
            <h2>list</h2>
            <LoginAndAbout className={passionOne.className}>
              <Link href="/login">
                <p>login</p>
              </Link>
              <Link href="/about">
                <p>about us</p>
              </Link>
            </LoginAndAbout>
          </WrapperLoginAndAbout>
        </StyledText>
      </WrapperText>
    </Background>
  );
}

const Background = styled.div`
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

const WrapperLoginAndAbout = styled.div`
  display: flex;
`;

const LoginAndAbout = styled.div`
  display: flex;
  height: 280px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 30px;

  p {
    font-size: 50px;
    color: #ca0000;
  }
`;
