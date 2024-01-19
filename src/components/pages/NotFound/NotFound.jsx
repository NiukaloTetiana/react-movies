import React from 'react';
import { Text, Wrapper, StyledLink } from './NotFound.styled';
import { TfiControlBackward } from 'react-icons/tfi';

const NotFound = () => {
  return (
    <Wrapper>
      <Text>Sorry... Page was not found!</Text>
      <StyledLink to="/">
        <TfiControlBackward />
        Go home.
      </StyledLink>
    </Wrapper>
  );
};

export default NotFound;
