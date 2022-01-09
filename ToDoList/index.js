const add = document.querySelector(".add");
const clearItems = document.querySelector(".clear-items");
const items = document.querySelector(".items");
const data = document.querySelector(".data");

add.addEventListener("click", () => {
  if (data.value == "") {
    emptyValue();
  } else {
    createItem();
  }
});

clearItems.addEventListener("click", () => {
  items.innerHTML = "";
});

let emptyValue = () => {
  let error = document.createElement("p");
  items.appendChild(error);
  error.style.color = "red";
  error.innerText = "empty value is not accepted";
  add.disabled = "true";
  setTimeout(() => {
    error.remove();
    add.removeAttribute("disabled");
  }, 5000);
};

let createItem = () => {
  let item = document.createElement("div");
  let text = document.createElement("p");
  let buttons = document.createElement("div");
  let done = document.createElement("button");
  let edit = document.createElement("button");
  let remove = document.createElement("button");

  item.classList.add("item");
  text.classList.add("text");
  buttons.classList.add("buttons");
  done.classList.add("done");
  edit.classList.add("edit");
  remove.classList.add("remove");

  item.appendChild(text);
  item.appendChild(buttons);
  buttons.appendChild(done);
  buttons.appendChild(edit);
  buttons.appendChild(remove);

  text.innerText = data.value;
  done.innerText = "Done";
  edit.innerText = "Edit";
  remove.innerText = "Remove";
  items.appendChild(item);

  done.addEventListener("click", () => {
    text.style.textDecoration = "line-through";
  });

  remove.addEventListener("click", () => {
    item.remove();
  });

  data.value = "";
};
