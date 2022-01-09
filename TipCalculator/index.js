//get all require selectors
const amount = document.querySelector(".amount");
const people = document.querySelector(".people");
const feedback = document.querySelector(".feedback");
const calculate = document.querySelector(".calculate");
const container = document.querySelector(".container");

//execution on button click
calculate.addEventListener("click", () => {
  //get entered amount, number of people and given feedback
  let enteredAmount = amount.value;
  let enteredPeople = people.value;
  let givenFeedback = feedback.value;

  //create an element to show tip or error
  let result = document.createElement("div");
  let text = document.createElement("p");
  text.classList.add("text");
  result.appendChild(text);
  container.appendChild(result);
  result.classList.add("result");

  //condition check in case of inappropriate value
  if (enteredAmount < 1 && enteredPeople < 2) {
    text.innerText =
      "Your amount should be greater than 0 and there should be minimum 2 people";
  } else if (enteredPeople < 2) {
    text.innerText = "Number of people should be minimum 2";
  } else if (enteredAmount < 1) {
    text.innerText = "Your amount should be greater than 0";
  } else {
    text.style.color = "green";
    text.innerText = calculation(enteredAmount, enteredPeople, givenFeedback);
  }

  calculate.disabled = "true";
  setTimeout(() => {
    result.remove();
    calculate.removeAttribute("disabled");
  }, 5000);
});

// tip calcultation function
let calculation = (totalAmount, totalPeople, finalFeedback) => {
  let tip;
  if (finalFeedback == "Terrific") {
    tip = (totalAmount * 20) / 100 / totalPeople;
  }
  if (finalFeedback == "Good") {
    tip = (totalAmount * 15) / 100 / totalPeople;
  }
  if (finalFeedback == "Average") {
    tip = (totalAmount * 10) / 100 / totalPeople;
  }
  if (finalFeedback == "Bad") {
    tip = (totalAmount * 5) / 100 / totalPeople;
  }

  return `Each person owes $${tip.toFixed(2)} for tip`;
};
