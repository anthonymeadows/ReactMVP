import React, { useState } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Languages from './Languages.jsx';
import Input from './input.jsx';
import Output from './output.jsx';
import Jokes from './Jokes.jsx';
import About from './About.jsx'; 

const App = () => {
  const [selectedLanguage, setLanguage] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Header selectedLanguage={selectedLanguage} />
      <Languages setLanguage={setLanguage} />
      <div className='inputOutputContainer'>
        <Input setInputValue={setInputValue} />
        <Output inputValue={inputValue} selectedLanguage={selectedLanguage} />
      </div>
      <Jokes />
      <About /> 
      <Footer />
    </>
  );
};

export default App;