import ColorCodedSentence from "@/components/color-coded-sentence"

const turkishSections = [
    { text: 'Marketten', color: 'yellow', separated: true },
    { text: 'iki', color: 'aqua', separated: true },
    { text: 'ekmek', color: 'blue', separated: true },
    { text: 'aldım', color: 'red', separated: false },
    { text: '.', color: false, separated: false },
];

const englishSections = [
    { text: 'I', color: 'red', separated: true },
    { text: 'bought', color: 'red', separated: true },
    { text: 'two', color: 'aqua', separated: true },
    { text: 'loaves', color: 'blue', separated: true },
    { text: 'of', color: 'blue', separated: true },
    { text: 'bread', color: 'blue', separated: true },
    { text: 'from', color: 'yellow', separated: true },
    { text: 'the', color: 'yellow', separated: true },
    { text: 'market', color: 'yellow', separated: false },
    { text: '.', color: false, separated: false },
];

const turkishSections2 = [
    { text: 'Araba', color: 'blue', separated: false },
    { text: 'dan', color: 'yellow', separated: true },
    { text: 'uzaklaşıyorum', color: 'red', separated: false },
    { text: '.', color: false, separated: false },
];

const englishSections2 = [
    { text: 'I', color: 'red', separated: false },
    { text: '\'m', color: 'red', separated: true },
    { text: 'going', color: 'red', separated: true },
    { text: 'away', color: 'red', separated: true },
    { text: 'from', color: 'yellow', separated: true },
    { text: 'the', color: 'blue', separated: true },
    { text: 'car', color: 'blue', separated: false },
    { text: '.', color: false, separated: false },
];

export default function Topics() {
    return (
        <div>
            <ColorCodedSentence turkishSections={turkishSections}
                englishSections={englishSections} />
            <ColorCodedSentence turkishSections={turkishSections2}
                englishSections={englishSections2} />
        </div>
    );
}