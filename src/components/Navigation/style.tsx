import styled from 'styled-components';

export const NavigationStyle = styled.nav`
  justify-self: end;
  position: relative;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 15px;
    right: 0;
    gap: 10px;

    &.active {
      display: flex;
    }
  }
`;

export const NavigationItem = styled.li``;

export const NavigationLink = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  border: 1px solid transparent;

  & .netflix {
    width: 16px;
    height: 32px;
  }

  & .okko {
    width: 34px;
    height: 13px;
  }

  & .kinopoisk {
    width: 28px;
    height: 27px;
  }

  @media (min-width: 1024px) {
    transition: all 0.3s ease-in;

    &:hover {
      transform: scale(1.5);
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
      border-color: #5b5b5b;
    }

    &:focus {
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
      border-color: #5b5b5b;
      outline: transparent;
    }
  }

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;

    & .netflix {
      width: 13px;
      height: 26px;
    }

    & .okko {
      width: 27px;
      height: 10px;
    }

    & .kinopoisk {
      width: 22px;
      height: 21px;
    }
  }
`;

export const BurgerLine = styled.div`
  width: 100%;
  height: 1px;
  background: #fff;
  transition: transform 0.3s ease-in-out;
`;

export const BurgerMenu = styled.button`
  width: 20px;
  height: 13px;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &.active {
    & div:first-child {
      position: absolute;
      top: 0;
      transform: rotate(45deg);
    }

    & div:nth-child(2) {
      display: none;
    }

    & div:last-child {
      transform: rotate(-45deg);
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
