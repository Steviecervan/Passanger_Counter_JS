// document.getElementById("count").innerText = 5

// initialize the count as 0
// listen fro clicks on the increment button
//increment the count variable
//change the count element in html to refelct now count

let counter = 0;

function increment() {
  counter = counter + 1;
  document.getElementById("count").innerText = counter;
}
