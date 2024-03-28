function generateQuote(){
    const quotes = [
        {
            quote: "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.",
            author: "Michael Scott, Season 5, 'The Duel'"
        },
        {
            quote: "I talk a lot, so I’ve learned to tune myself out.",
            author: "Kelly Kapoor, Season 7, 'Counseling'"
        },
        {
            quote: "I’m not superstitious, but I am a little stitious.",
            author: "Michael Scott, Season 4, 'Fun Run'"
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[arrayIndex].quote + "&quot;";
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;
}

// Ensure script runs after DOM is fully loaded
window.onload = function () {
    generateQuote();

    // Add event listener after DOM is fully loaded
    document.getElementById("generate").addEventListener("click", generateQuote);
};
