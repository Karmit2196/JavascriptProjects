let image = document.querySelector(".get-img");
let Name = document.querySelector(".get-name");
let city = document.querySelector(".get-city");
let state = document.querySelector(".get-state");
let country = document.querySelector(".get-country");
let email = document.querySelector(".get-email");
let generate = document.querySelector(".generate");

let url = `https://randomuser.me/api/`;

generate.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.results[0].name.first;
      const email = data.results[0].email;
      const { city, state, country } = data.results[0].location;
      const img = data.results[0].picture.thumbnail;
      setInfo(name, email, city, state, country, img);
    });
});

let setInfo = (setname, setemail, setcity, setstate, setcountry, setimg) => {
  image.src = setimg;
  Name.innerText = setname;
  email.innerText = setemail;
  city.innerText = setcity;
  state.innerText = setstate;
  country.innerText = setcountry;
};
