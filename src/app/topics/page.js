import ColorCodedSentence from "@/components/color-coded-sentence"

const turkishSections = [
    { text: 'Market', color: 'yellow', separated: false, tooltip: "market (market) + -den = marketten (from the market)" },
    { text: 'ten', color: 'tomato', separated: true, tooltip: undefined },
    { text: 'iki', color: 'aqua', separated: true, tooltip: "two" },
    { text: 'ekmek', color: 'blue', separated: true, tooltip: "bread*\n*bread is countable in Turkish. It typically refers to a loaf of bread." },
    { text: 'aldım', color: 'red', separated: false, tooltip: "al (buy) + -dım = aldım (I bought)" },
    { text: '.', color: false, separated: false, tooltip: undefined },
];

const englishSections = [
    { text: 'I', color: 'red', separated: true },
    { text: 'bought', color: 'red', separated: true },
    { text: 'two', color: 'aqua', separated: true },
    { text: 'loaves', color: 'blue', separated: true },
    { text: 'of', color: 'blue', separated: true },
    { text: 'bread', color: 'blue', separated: true },
    { text: 'from', color: 'tomato', separated: true },
    { text: 'the', color: 'yellow', separated: true },
    { text: 'market', color: 'yellow', separated: false },
    { text: '.', color: false, separated: false },
];

const turkishSections2 = [
    { text: 'Araba', color: 'blue', separated: false, tooltip: "araba (car) + -dan = arabadan (from the car)" },
    { text: 'dan', color: 'yellow', separated: true, tooltip: undefined },
    { text: 'uzaklaşıyorum', color: 'red', separated: false, tooltip: "uzak (far, away) + -laş = uzaklaş (go / move away)\nuzaklaş (go away) + -yorum = uzaklaşıyorum (I'm moving away)" },
    { text: '.', color: false, separated: false, tooltip: undefined },
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