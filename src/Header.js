import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";


function Header() {
  return (
      //BEM naming
    <nav className="header">
        <h1>HELLO THE LIST OF MOVIES</h1>
          <div className="header__search">
              <input type="text" className="header__searchInput" />
              <SearchIcon className="header__searchIcon" />
          </div>
    </nav>
  )
}

export default Header;
