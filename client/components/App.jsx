import React, { useState } from 'react';
import Languages from './Languages.jsx';
import Input from './input.jsx';
import Output from './output.jsx';

const App = () => {
  const [selectedLanguage, setLanguage] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <h1 id='currentLanguage'> Language: {selectedLanguage}</h1>
      <Languages setLanguage={setLanguage} />
      <Input setInputValue={setInputValue} />
      <Output inputValue={inputValue} selectedLanguage={selectedLanguage} />
    </>
  );
};

export default App;
