import React from "react";
import ConfettiExplosion from 'react-confetti-explosion';

// Assume you have images for each language in the 'images' folder
const languageImages = {
  Blorb: '/images/blorb.png',
  'Cookie Monster': './images/cookiemonster.png',
  Martian: '/images/Martian.png',
};

const LanguageOptions = ({ setLanguage }) => {
  const languages = ['Blorb', 'Cookie Monster', 'Martian'];
  const [explodingLanguage, setExplodingLanguage] = React.useState(null);

  function handleClick(lang) {
    setLanguage(lang);
    setExplodingLanguage(lang);
  }

  return (
    <>
      {languages.map((lang) => (
        <div key={lang} className='alienImages' onClick={() => handleClick(lang)}>
          {lang === explodingLanguage && <ConfettiExplosion />}
          <img src={languageImages[lang]} alt={lang} style={{ width: '100%', height: '100%'}} />
        </div>
      ))}
    </>
  );
};

export default LanguageOptions;
