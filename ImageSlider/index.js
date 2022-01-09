const image = document.querySelector("#img");
const btns = document.querySelectorAll(".btn");

let count = 0;
let length = 4;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("hello");
    if (btn.classList.contains("next")) {
      count = count + 1;
      console.log(count);
      if (count > length) {
        count = 0;
      }
    } else {
      count = count - 1;
      if (count < 0) {
        count = length;
      }
    }
    image.src = `img/img-${count}.jpeg`;
  });
});
