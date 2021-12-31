import styled from 'styled-components';

export const PresentStyle = styled.section`
  margin-bottom: 30px;
`;

export const Tabs = styled.div`
  max-width: 285px;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  padding: 13px 21px;
  background: rgba(0, 0, 0, 0.7);
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
`;

export const CardVideo = styled.li`
  flex-basis: 285px;
`;

export const CardVideoLink = styled.a``;

export const CardVideoImg = styled.img`
  height: 146px;
  width: 100%;
  margin-bottom: 10px;
`;

export const CardVideoName = styled.figcaption``;

export const CardPhoto = styled.li`
  flex-basis: 255px;
`;

export const CardPhotoImg = styled.img`
  width: 100%;
  height: 206px;
`;

export const CardProduct = styled.li`
  flex-basis: 285px;
`;

export const Product = styled.article``;

export const ProductImg = styled.img`
  width: 100%;
  height: 176px;
  margin-bottom: 10px;
`;

export const ProductName = styled.span`
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
`;
