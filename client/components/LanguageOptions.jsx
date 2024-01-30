import React from "react";

const LanguageOptions = ({ setLanguage }) => {
  const languages = ['Blorb', 'Cookie Monster', 'Martian'];

  return (
    <>
      {languages.map((lang) => (
        <div key={lang} className='alienImages' onClick={() => setLanguage(lang)}>
          {lang}
        </div>
      ))}
    </>
  );
};

export default LanguageOptions;
