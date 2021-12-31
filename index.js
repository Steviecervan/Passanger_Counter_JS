let counter = 0;
let count_Element = document.getElementById("count");

function increment() {
  counter++;
  count_Element.innerText = counter;
}

function save() {
  count_Element.textContent = 0;
  let previousSaves = counter + " - ";
  let saveEl = document.getElementById("save-el");
  saveEl.textContent += previousSaves;
  counter = 0;
}
