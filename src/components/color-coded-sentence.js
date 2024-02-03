import React from 'react';

const ColorCodedSentence = ({ turkishSections, englishSections }) => {
    // Map each section of the sentence to a span element with the corresponding color.
    // Add a whitespace if section is supposed to be separated from its neighbour.
    // If the next section has the same colour, hide the whitespace, so the underlines connect.
    
    const colorCodedTurkish = turkishSections.map((section, index) => (
        <span key={index} className={section.tooltip ? "has-tooltip" : ""} style={section.color ? {textDecoration: 'underline', textDecorationColor: section.color, textUnderlineOffset: '2px', textDecorationThickness: '2px'} : {}}>
            {section.text}{section.separated && <span style={section.color !== turkishSections[index + 1].color ? {visibility: 'hidden'} : {}}> </span>}
            {section.tooltip && <span className='tooltip font-friend'>{section.tooltip}</span>}
        </span>
    ));

    const colorCodedEnglish = englishSections.map((section, index) => (
        <span key={index} style={section.color ? {textDecoration: 'underline', textDecorationColor: section.color, textUnderlineOffset: '2px', textDecorationThickness: '2px'} : {}}>
            {section.text}{section.separated && <span style={section.color !== englishSections[index + 1].color ? {visibility: 'hidden'} : {}}> </span>}
        </span>
    ));

    return (
        <div className='flex flex-col items-start justify-evenly bg-slate-700/20 w-fit p-4 font-dynaPuff'>
            <p>{colorCodedTurkish}</p>
            <p>( {colorCodedEnglish} )</p>
        </div>
    );
};

export default ColorCodedSentence;
