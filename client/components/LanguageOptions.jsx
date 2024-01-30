import React, { useEffect, useState } from "react";

const LanguageOptions = () => {
  const [message, setMessage] = useState('');
  const [language, setLanguage] = useState('');
  const languages = ['Blorb', 'Cookie Monster', 'Martian'];

  const fetchData = async (name) => {
    try {
      const response = await fetch(`/api/${name}`);
      const responseJson = await response.json();
      setMessage(responseJson.message);
      console.log('Current selected alphabet: ', responseJson.message);
    } catch (error) {
      console.error('Error on fetch: ', error);
    }
  };

  useEffect(() => {
    fetchData(language);
  }, [language]);

  return (
    <>
      {languages.map((lang) => (
        <div key={lang} className = 'alienImages' onClick={() => setLanguage(lang)}>
          {lang}
        </div>
      ))}
    </>
  );
};

export default LanguageOptions;
