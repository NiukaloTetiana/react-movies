import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListMovies = styled.ul`
  /* margin-top: 12px; */
`;

export const ItemMovies = styled.li`
  font-weight: 700;
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};
  padding: 20px;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.backgNav};
  border-radius: ${({ theme }) => theme.spacing(4)};
  transition: ${({ theme }) => theme.transition.delay};

  &:not(:last-child) {
    margin-bottom: 6px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orangeOpas};
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
`;
