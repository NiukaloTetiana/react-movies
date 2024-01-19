import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  box-shadow: ${({ theme }) => theme.shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(3)};
  overflow: hidden;
  margin: 20px 0;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.backgNav};
  box-shadow: ${({ theme }) => theme.shadows.small};
  background-size: 40%;
  background-position: center;
  opacity: 0.6;
  outline: none;
  transition: ${({ theme }) => theme.transition.trnz},
    ${({ theme }) => theme.transition.delay};

  svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  &:focus,
  :active {
    background-color: ${({ theme }) => theme.colors.accent};
    transform: scale(1.1);
    fill: ${({ theme }) => theme.colors.gray};
  }
`;

export const Input = styled.input`
  font-family: inherit;
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: ${({ theme }) => theme.shadows.text};

  display: inline-block;
  width: 100%;
  border: none;
  outline: none;
  padding: 5px 15px;
  background-color: transparent;

  &::placeholder {
    font-size: 18px;
    opacity: 0.6;
  }
`;
