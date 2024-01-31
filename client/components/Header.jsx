import React from 'react';
import Navbar from './Navbar.jsx';

const Header = ({ selectedLanguage }) => {
  return (
    <header id='currentLanguage'>
      <Navbar />
      <div>
        <h1>Language: {selectedLanguage}</h1>
      </div>
    </header>
  );
};

export default Header;