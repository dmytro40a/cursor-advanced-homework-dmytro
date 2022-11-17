// Variables
const idGenerator = createIdGenerator();
const fontGenerator = newFontGenerator(32);
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnNext = document.getElementById("next");
let output = document.querySelector(".output");

// Functions
function* createIdGenerator() {
  let i = 1;
  while (true) {
    yield i;
    i++;
  }
}

function* newFontGenerator(currentValue) {
  while (currentValue) {
    let fontSize = yield currentValue;
    let scale = 2;
    if (fontSize === "plus") {
      currentValue += scale;
      console.log(currentValue);
    } else {
      currentValue -= scale;
      console.log(currentValue);
    }
  }
}

// Event listeners
btnNext.addEventListener("click", () => {
  let next = idGenerator.next();
  output.innerHTML = next.value;
});
btnPlus.addEventListener("click", () => {
  output.style.fontSize = `${fontGenerator.next("plus").value}px`;
});
btnMinus.addEventListener("click", () => {
  output.style.fontSize = `${fontGenerator.next("minus").value}px`;
});
