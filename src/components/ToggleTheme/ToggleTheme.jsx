import { ThemeContext } from 'components/ThemeContext/ThemeContext';
import { useContext } from 'react';
import { GiNightSky } from 'react-icons/gi';
import { FaRegLightbulb } from 'react-icons/fa6';
import { Container, ReactSwitchStyled } from './ToggleTheme.styled';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <ReactSwitchStyled
        onChange={toggleTheme}
        offColor="#ffc700"
        onColor="#ff00ff"
        checked={theme === 'dark'}
        uncheckedHandleIcon={<FaRegLightbulb size="26" color="#fff" />}
        checkedHandleIcon={<GiNightSky size="26" color="#fff" />}
        checkedIcon={false}
        uncheckedIcon={false}
        boxShadow="0 0 2px 3px #fff"
      />
    </Container>
  );
};
