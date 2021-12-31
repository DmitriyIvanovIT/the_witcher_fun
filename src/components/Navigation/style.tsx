import styled from 'styled-components';

export const NavigationStyle = styled.nav`
  justify-self: end;
`;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;
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
`;
