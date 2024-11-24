//Use an array to hold the value of the quotes
var arrayOfQuotes = [
{
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
},
{
    author: "Epictetus",
    quote:"It's not what happens to you, but how you react to it that matters.",
},
{ 
    author: "Frank Sinatra",
    quote: "The best revenge is massive success." },
{
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
},
{
    author: "Nelson Mandela",
    quote: "Resentment is like drinking poison and waiting for your enemies to die.",
},
{
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
},
{
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
},
{
    author: "Frank Zappa",
    quote: "So many books, so little time.",
},
{
    author: "Albert Einstein",
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
},
{
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
},
];





var lastRandom = -1;

function generateQuote() {
    var random;
    do {
        random = Math.floor(Math.random() * arrayOfQuotes.length);
    } while (random === lastRandom);

    console.log(random);

    lastRandom = random;

    const selectedQuote = arrayOfQuotes[random];

    document.getElementById("quote").innerHTML = `
        <p class="mt-5 fs-2">${selectedQuote.quote}</p>
        <p class="fs-2">-- ${selectedQuote.author}</p>`;
}

