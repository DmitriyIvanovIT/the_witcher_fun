import styled from 'styled-components';

export const InfoStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 43px;
`;

export const InfoTitle = styled.h1`
  font-family: IBM Plex Mono;
  font-size: 90px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const InfoDescription = styled.p`
  display: inline-flex;
  max-width: 350px;
  margin-bottom: 54px;
  font-family: Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 130%;
  color: #FFFFFF;
`;

export const InfoButton = styled.a`
  display: block;
  width: 288px;
  height: 68px;
  box-shadow: -4px 6px 10px rgba(10, 10, 10, 0.51);
  background-image: url('img/button.png');
  background-position: center;
  background-size: cover;
`;
