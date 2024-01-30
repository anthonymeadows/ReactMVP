import Languages from './Languages.jsx'
import Input from './input.jsx'
import React from 'react';

const App = (props) => {
  // console.log('App props: ',props)
  return (
    <>
      <h1 id = 'currentLanguage'> Language: {props.key}</h1>
      <Languages />
      <Input />
    </>
  );
};

export default App;
