import React, { useEffect, useState } from 'react';

const Output = ({ inputValue, selectedLanguage }) => {
  const [translation, setTranslation] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/${selectedLanguage}/${inputValue}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTranslation(data.response); // Update the state with the translation
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (inputValue && selectedLanguage) {
      fetchData();
    }
  }, [inputValue, selectedLanguage]);

  return (
    <>
      <div className='output-box'>
        <p>Output:</p>
        <div className='output-content'>
          {translation}
        </div>
      </div>
    </>
  );
};

export default Output;
