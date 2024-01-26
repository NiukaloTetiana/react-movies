import styled from 'styled-components';
import Switch from 'react-switch';

export const Container = styled.div`
  position: absolute;
  top: 35px;
  right: 40px;
  z-index: 1200;
`;

export const ReactSwitchStyled = styled(Switch)`
  & .react-switch-handle {
    background-color: transparent !important;
  }
`;
