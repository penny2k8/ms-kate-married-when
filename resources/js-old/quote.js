var RNG = require('rng-js');
const quotes = [
    {
        quote: "In the future . . . if by some miracle you ever find yourself in the position to fall in love again . . . fall in love with me",
        source: "—Colleen Hoover - It Ends With Us"
    },
    {
        quote: "Doubt thou the stars do are fire/Doubt thou the sun doth move/Doubt truth to be a liar/But never doubt I love",
        source: "—William Shakespeare - Hamlet",
    },
    {
        quote: "My bounty is as boundless as the sea/My love as deep; the more I give to thee/The more I have, for both are infinite",
        source: "—William Shakespeare - Romeo and Juliet",
    },
    {
        quote: "It is impossible to manufacture or imitate love.",
        source: "—Horace Slughorn, in Harry Potter and the Half-Blood Prince - J.K Rowling",
    },
    {
        quote: "If I said I was madly in love with you, I’d be lying and what’s more, you’d know it.",
        source: "—Magaret Mitchell - Gone With The Wind",
    },
    {
        quote: "It stops here. With me and you. It ends with us.",
        source: "—Colleen Hoover - It Ends With Us",
    },
    {
        quote: "Just because someone hurts you doesn't mean you can simply stop loving them. It's not a person's actions that hurt the most. It's the love. If there was no love attached to the action, the pain would be a little easier to bear.",
        source: "—Colleen Hoover - It Ends With Us",
    },

    {
        quote: "I’ve never had a moment’s doubt. I love you. I believe in you completely. You are my dearest one. My reason for life.",
        source: "-Ian McEvan - Atonement",
    },
    {
        quote: "I belong to my beloved, and my beloved is mine.",
        source: "—Jamie McGuire - Beautiful Disaster",
    },
    {
        quote: "Love has nothing to do with what you are expecting to get–only with what you are expecting to give–which is everything.",
        source: "—Katharine Hepburn",
    },
    {
        quote: "Did my heart love till now? Foreswear it, sight! For I ne'er saw true beauty till this night.",
        source: "—William Shakespeare - Romeo and Juliet",
    },
    {
        quote: "Do I love you? My god, if your love were a grain of sand, mine would be a universe of beaches.",
        source: "—William Goldman - The Princess Bride",
    },
    {
        quote: "It doesn’t matter who you are or what you look like, so long as somebody loves you.",
        source: "—Roald Dahl - The Witches",
    },
    {
        quote: "The one thing we can never get enough of is love. And the one thing we never give enough is love",
        source: "—Henry Miller",
    },
    {
        quote: "Love consists of this: two solitudes that meet, protect and greet each other.",
        source: "—Rainer Maria Rilke",
    },
    {
        quote: "Love is like the wind, you can’t see it but you can feel it.",
        source: "—Nicholas Sparks - A Walk to Remember",
    },
]
var d = new Date('Nov 1, 2024').getTime();
var rng = new RNG(d*Math.random());

const gimmeQuotes = function(){
    n = rng.random(0,15);
    document.getElementById("quote").innerHTML='"'+quotes[n].quote+'"';
    document.getElementById("source").innerHTML=quotes[n].source;
}

window.onload = function() {
    gimmeQuotes();
}