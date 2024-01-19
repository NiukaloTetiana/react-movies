import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  width: 190px;
  height: 380px;
  padding: 6px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.backgNav};
  border-radius: ${({ theme }) => theme.spacing(4)};
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
    transform: scale(1.06);
  }
`;

export const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadows.text};

  padding-left: 10px;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.accent};
  text-shadow: ${({ theme }) => theme.shadows.text};

  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const Img = styled.img`
  min-width: 190px;
  height: 270px;
  border-radius: ${({ theme }) => theme.spacing(3)};
  margin-bottom: 6px;
`;
