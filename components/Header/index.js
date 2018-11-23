// External libraries
import React from 'react';
import Link from 'next/link';

// Components
import Nav from '../Nav';

// Styled components
import { Logo, StyledHeader } from './styles';

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo>
        <Link href="/">
          <a>Sick Fits</a>
        </Link>
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </StyledHeader>
);

export default Header;
