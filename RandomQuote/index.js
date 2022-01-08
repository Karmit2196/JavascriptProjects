//to select require elements
const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

//random quote API URL
let url = `https://api.quotable.io/random`;

//fetch data from api and change the text accordingly
let getQuote = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      quote.innerText = data.content;
      author.innerText = data.author;
    });
};

//button click event exeuction
btn.addEventListener("click", () => {
  getQuote();
});
