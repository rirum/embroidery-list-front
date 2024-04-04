'use client';
import styled from 'styled-components';
import { ericaOne } from '@/utils/fonts';

export default function Home() {
  return (
    <Background className={ericaOne.className}>
      <h1>embroidery list</h1>
    </Background>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ffb2b2;
  box-sizing: border-box;
  h1 {
    margin-top: 0;
    font-size: 36px;
    color: #ca0000;
  }
`;
