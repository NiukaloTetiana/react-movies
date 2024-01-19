import { Outlet } from 'react-router-dom';
import { MdLocalMovies } from 'react-icons/md';
import { Suspense } from 'react';
import {
  Container,
  StyledHeader,
  NavItem,
  NavList,
  Navigation,
  StyledLink,
} from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <StyledHeader>
        <Navigation>
          <NavList>
            <NavItem>
              <StyledLink to="/">
                <MdLocalMovies />
                Home
              </StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/movies">Movies</StyledLink>
            </NavItem>
          </NavList>
        </Navigation>
      </StyledHeader>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
