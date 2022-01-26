import React from 'react';
import './header.css';
import punkLogo from '../assets/assets/header/cryptopunk-logo.png';
import searchicon from '../assets/assets/header/search.png';
import themeSwitchicon from '../assets/assets/header/theme-switch.png';

const Header = () => {
  return( 
  <div className='header'>
      <div className="logocontainer">
          <img src={punkLogo} className='punklogo' alt='' />
      </div>
      <div className="searchBar">
        <div className="searchiconcontaner">
          <img src={searchicon} alt='' />
        </div>
        <input className='searchInput' type="text"  placeholder='Collection, item or User '/>
      </div>
      <div className="headerItems">
        <p>Drop</p>
        <p>Marketplace</p>
        <p>Create</p>

      </div>
      <div className="headerActions">
        <div className="themeSwitch">
          <img src={themeSwitchicon} alt=''/>
        </div>
        
      </div>
      <div className="loginButton">
        GET IN
      </div>
      
  </div>
  )
};

export default Header;
