import RevealHeader from "./header.js";

//COUNTER

let counter = 0;
function IncrementCounter() {
  window.setTimeout(() => {
    document.querySelector(".counter").innerHTML = counter;
    counter++;
    if (counter <= 100) {
      IncrementCounter();
    } else {
      ExitLoader();
    }
  }, 30);
}

IncrementCounter();

function ExitLoader() {
  document.querySelector(".counter").classList.add("hidden");
  window.setTimeout(() => {
    document.querySelector(".circle svg").classList.add("reveal");
  }, 300);
  window.setTimeout(() => {
    RevealHeader();
  }, 1000);
}
