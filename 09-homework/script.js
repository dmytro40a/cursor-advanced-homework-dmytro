document.body.style.background = generateRandomColor();

function generateBlocks() {
  const container = document.querySelector(".container-box");
  let boxNumber = 25;
  container.innerHTML = "";

  for (let i = 0; i < boxNumber; i++) {
    const createBox = document.createElement("div");
    createBox.classList.add("box");
    createBox.style.backgroundColor = generateRandomColor();
    container.append(createBox);
  }
}

function generateRandomColor() {
  const numberOfColors = 9999;
  return `#${Math.floor(Math.random() * numberOfColors).toString(16)}`;
}
generateBlocks();
setInterval(generateBlocks, 1000);
