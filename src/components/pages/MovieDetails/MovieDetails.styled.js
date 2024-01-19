import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 18px;
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  margin: 12px 0;
`;

export const MovieWrapper = styled.div`
  margin-left: 10px;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  margin: 10px 0;

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

export const Img = styled.img`
  max-width: 250px;
  border-radius: ${({ theme }) => theme.spacing(4)};
`;

export const MovieTitle = styled.h2`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.text};
  margin-bottom: 15px;
`;

export const Title = styled.h3`
  font-size: 20px;
  text-shadow: ${({ theme }) => theme.shadows.text};
  margin-bottom: 8px;
`;

export const Descr = styled.p`
  font-size: 16px;
  max-width: 700px;

  text-shadow: ${({ theme }) => theme.shadows.text};
  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  font-size: 16px;
  text-shadow: ${({ theme }) => theme.shadows.text};
`;
