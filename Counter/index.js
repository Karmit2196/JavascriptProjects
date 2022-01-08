const counter = document.querySelector(".counter");
const buttons = document.querySelectorAll(".btn");
let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("add")) {
      count++;
    } else {
      count--;
    }
    counter.innerText = count;
    if (count > 0) {
      counter.style.color = "green";
    } else if (count < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
  });
});
