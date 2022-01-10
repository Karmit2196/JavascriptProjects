const joke = document.querySelector(".joke");
const getJoke = document.querySelector(".get-joke");

const url = `https://api.chucknorris.io/jokes/random`;

getJoke.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (joke.innerText = data.value));
});
