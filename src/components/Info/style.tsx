import styled from 'styled-components';

export const InfoStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 43px;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }

  @media (max-width: 730px) {
    margin-bottom: 30px;
  }
`;

export const InfoTitle = styled.h1`
  font-family: IBM Plex Mono;
  font-size: 90px;
  font-weight: 500;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 60px;
  }

  @media (max-width: 576px) {
    font-size: 40px;
  }
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

  @media (max-width: 768px) {
    margin-bottom: 28px;
  }

  @media (max-width: 576px) {
    margin-bottom: 23px;
  }
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
