import styled from 'styled-components';

export const PresentStyle = styled.section`
  @media (max-width: 768px) {
    position: relative;
    top: -27px;
  }

  @media (max-width: 730px) {
    top: 0;
  }
`;

export const Tabs = styled.div`
  max-width: 285px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 13px 21px;
  background: rgba(0, 0, 0, 0.7);

  @media (max-width: 768px) {
    padding: 16px 46px;
  }

  @media (max-width: 576px) {
    margin-right: auto;
    padding: 10px 30px;
  }
`;

export const Tab = styled.button`
  font-weight: bold;
  font-size: inherit;
  line-height: 1;
  border-bottom: 2px solid transparent;
  transition: border-color 0.3s ease-in-out;

  &.active {
    cursor: default;
    border-color: #fff;
  }
`;

export const PresentContent = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const CardVideo = styled.li`
  flex-basis: 285px;

  @media (max-width: 768px) {
    flex-basis: 320px;
    margin-bottom: 40px;
  }

  @media (max-width: 730px) {
    flex-basis: 100%;
  }
`;

export const CardVideoLink = styled.a``;

export const CardVideoImg = styled.img`
  height: 146px;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 730px) {
    height: auto;
  }
`;

export const CardVideoName = styled.figcaption``;

export const CardPhoto = styled.li`
  flex-basis: 255px;

  @media (max-width: 768px) {
    flex-basis: 320px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const CardPhotoImg = styled.img`
  width: 100%;
  height: 206px;

  @media (max-width: 768px) {
    height: 270px;
  }

  @media (max-width: 730px) {
    height: auto;
  }
`;

export const CardProduct = styled.li`
  flex-basis: 285px;

  @media (max-width: 768px) {
    flex-basis: 320px;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const Product = styled.article``;

export const ProductImg = styled.img`
  width: 100%;
  height: 176px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 730px) {
    height: auto;
  }
`;

export const ProductName = styled.span`
  display: inline-block;
  margin-bottom: 5px;
`;

export const ProductBuy = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const ProductPrice = styled.p`
  line-height: 1;
`;

export const ProductButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 50%;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;

  & svg {
    fill: white;
    width: 24px;
    height: 24px;
    transition: fill 0.3s ease-in-out;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: rgba(255, 255, 255, 0.19);
  }

  &:focus {
    border-color: #9b9b9b;
    outline: none;
  }

  &:active {
    & svg {
      fill: #b3b3b3;
    }
  }

  @media (max-width: 768px) {
    width: 30px;
    height: 30px;

    & svg {
      width: 21px;
      height: 21px;
    }
  }
`;
