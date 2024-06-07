import React from 'react'
import { MenuLink } from './MenuLink'

const Header = () => {
  return (
    <header>
      <MenuLink name="Login" path="/login" />
    </header>
  );
}

export default Header