'use client';
import styled from 'styled-components';
import { fredoka } from '@/utils/fonts';

export default function About() {
  return (
    <WrapperContent>
      <StyledText>
        {' '}
        <h1>about us</h1>
        <p className={fredoka.className}>
          tired of going shopping for embroidery floss and return with the same
          5 colors again? (I know, I’ve been there) this will help you list all
          the colors and quantity of the floss that you have on your inventory.
        </p>
      </StyledText>
      <StyledMenu>
        <ul>
          <li>home</li>
          <li>login</li>
        </ul>
      </StyledMenu>
    </WrapperContent>
  );
}

const WrapperContent = styled.div`
  color: #ca0000;
  width: 1000px;
  margin: 0 auto;
  margin-top: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 100px;
  }
  p {
    font-size: 20px;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  width: 1000px;
  justify-content: flex-end;
  margin-top: 50px;
  li {
    list-style-type: none;
    font-size: 50px;
    margin-right: 30px;

    display: inline;
  }
`;
