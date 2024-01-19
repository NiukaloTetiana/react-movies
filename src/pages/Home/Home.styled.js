import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: flex-end;
  font-weight: 700;
  font-size: 33px;
  text-shadow: ${({ theme }) => theme.shadows.text};
  padding: 10px;
`;
