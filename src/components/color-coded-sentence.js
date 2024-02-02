import React from 'react';

const ColorCodedSentence = ({ turkishSections, englishSections }) => {
    // Map each section to a span element with the corresponding color
    const colorCodedTurkish = turkishSections.map((section, index) => (
        <span key={index} style={section.color ? {textDecoration: 'underline', textDecorationColor: section.color, textUnderlineOffset: '2px'} : {}}>
            {section.text}{section.separated && <span style={section.color !== turkishSections[index + 1].color ? {visibility: 'hidden'} : {}}> </span>}
        </span>
    ));

    const colorCodedEnglish = englishSections.map((section, index) => (
        <span key={index} style={section.color ? {textDecoration: 'underline', textDecorationColor: section.color, textUnderlineOffset: '2px'} : {}}>
            {section.text}{section.separated && <span style={section.color !== englishSections[index + 1].color ? {visibility: 'hidden'} : {}}> </span>}
        </span>
    ));

    return (
        <div className='flex flex-col items-start justify-evenly bg-slate-700/20 w-fit p-4'>
            <p>{colorCodedTurkish}</p>
            <p>( {colorCodedEnglish} )</p>
        </div>
    );
};

export default ColorCodedSentence;
