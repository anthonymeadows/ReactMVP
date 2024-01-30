import LanguageOptions from "./LanguageOptions.jsx"
import React from "react";

export default function Languages(props) {
    console.log('Languages props: ', props)
    return (
        <>
            <div className = 'parentAlienImages'>
                <LanguageOptions />
            </div>
        </>
    )
}

