import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  background-image: url('https://kartinki.pics/uploads/posts/2022-02/1645077999_26-kartinkin-net-p-kino-kartinki-27.jpg');
  background-color: ${({ theme }) => theme.colors.backgNav};
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  display: flex;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.text};
  font-size: 50px;
  font-weight: 700;
  /* margin-top: 60px; */
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: flex-end;

  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: ${({ theme }) => theme.shadows.text};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover,
  &:focus,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
