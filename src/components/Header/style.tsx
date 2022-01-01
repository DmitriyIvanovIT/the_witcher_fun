import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin-bottom: 37px;
  padding-top: 20px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 60px 1fr 60px;
    margin-bottom: 68px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 45px 1fr 45px;
    padding-bottom: 15px;
    margin-bottom: 102px;
  }
`;

export const HeaderTimer = styled.span`
  justify-self: center;
  text-align: center;
`;
