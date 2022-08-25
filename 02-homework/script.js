let numberN = parseInt(prompt("Введіть початкове число N"));

while (isNaN(numberN)) {
  numberN = parseInt(prompt("Щось пішло не так:( Введіть початкове число", 10));
}
console.log(numberN);

let numberM = parseInt(prompt("Введіть кінцеве число M"));

while (isNaN(numberM) || numberN >= numberM) {
  numberM = parseInt(prompt("Введіть число, більше від числа N", 100));
}
console.log(numberM);

const skipQuestion = confirm("Пропускати парні числа?");

console.log(skipQuestion);

let sum = 0;

for (let i = numberN; i <= numberM; i++) {
  if (skipQuestion && i % 2 === 0) {
    continue;
  }
  sum += i;
}

console.log(sum);
alert(`Результат:  ${sum}`);
