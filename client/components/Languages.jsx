import React from "react";
import LanguageOptions from "./LanguageOptions.jsx";

export default function Languages({ setLanguage }) {
  return (
    <>
      <div className="parentAlienImages">
        <LanguageOptions setLanguage={setLanguage} />
      </div>
    </>
  );
}
