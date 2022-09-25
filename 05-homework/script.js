// #1
const getRandomArray = (length, min, max) => {
  const randomNumber = () => Math.floor(Math.random() * (max - min + 1)) + min;
  const resultRandomArray = [];

  for (let i = 0; i < length; i++) {
    resultRandomArray.push(randomNumber());
  }

  return resultRandomArray;
};
console.log(getRandomArray(10, 1, 10));

// #2
const getModa = (...numbers) => {
  const mode = {};
  let max = 0,
    count = 0;

  numbers.forEach((item) => {
    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  });

  return max;
};
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// #3
const getAverage = (...numbers) => {
  // reduce
  let total = numbers.reduce((a, b) => a + b, 0);

  return total / numbers.length;

  // forEach
  /*   let total = 0;
  numbers.forEach((num) => {
    total += num;
  });

  return total / numbers.length; */

  // loop
  /*   let total = 0;
    for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }

  return total / numbers.length; */
};
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// #4
const getMedian = (...numbers) => {
  const numbersLength = numbers.length;

  numbers.sort((a, b) => a - b);

  if (numbersLength % 2 === 0) {
    let firstNumberIndex = numbersLength / 2 - 1;
    let secondNumberIndex = numbersLength / 2;
    let firstNumber = numbers[firstNumberIndex];
    let secondNumber = numbers[secondNumberIndex];
    return (firstNumber + secondNumber) / 2;
  }

  return numbers[(numbersLength - 1) / 2];
};
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// #5
const filterEvenNumbers = (...numbers) => numbers.filter((i) => i % 2);
console.log(filterEvenNumbers(1, 2, 78, 4, 5, 29));

// #6
const countPositiveNumbers = (...numbers) =>
  numbers.filter((i) => i > 0).length;
console.log(countPositiveNumbers(11, -2, 23, -4, -5, 36));

// #7
const getDividedByFive = (...numbers) => numbers.filter((i) => !(i % 5));
console.log(
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

// #8
function replaceBadWords(string) {
  const badWords = ["shit", "fuck"];
  const censore = new RegExp(badWords.join("|"));
  const censoredWord = string

    .split(" ")
    .map((item) => item.replace(censore, "****"))
    .join(" ");

  return censoredWord;
}
console.log(replaceBadWords("bullshit, shit, fuck, fucking, motherfucker"));
