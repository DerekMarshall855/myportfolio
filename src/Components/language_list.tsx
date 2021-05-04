import React, { ReactNode, ReactElement } from "react";


function LanguageList({
    languages,
    renderNames,  //Define render function
  }: {
    languages: string[];
    renderNames: (language: string) => ReactNode;  //Takes strings, outputs reactNode
  }): ReactElement | null {  //Function returns null or ReactElement
    return (
        <div className="Experience-list">
            <ul>
                {languages.map((language, index) => (
                <li key={index}>
                    {renderNames(language)}
                </li>
                ))}
            </ul> 
        </div>
    );
  }

export default LanguageList;