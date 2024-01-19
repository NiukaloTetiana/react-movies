import styled from 'styled-components';

export const Item = styled.li`
  padding: 10px;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.backgNav};
  border-radius: ${({ theme }) => theme.spacing(4)};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Title = styled.h3`
  font-size: 20px;

  text-shadow: ${({ theme }) => theme.shadows.text};
  padding-left: 6px;
`;

export const ReviewsDescr = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: ${({ theme }) => theme.shadows.text};

  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
`;
