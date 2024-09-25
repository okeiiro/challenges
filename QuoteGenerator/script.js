// script.js
const quotes = [
    "The best way to predict the future is to create it.",
    "Do not watch the clock. Do what it does. Keep going.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "It does not matter how slowly you go as long as you do not stop.",
    "The time will pass anyway."
];

const quoteElement = document.getElementById('quote')
const newQuoteButton = document.getElementById('new-quote')

newQuoteButton.addEventListener('click',() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent=quotes[randomIndex]

}
)




