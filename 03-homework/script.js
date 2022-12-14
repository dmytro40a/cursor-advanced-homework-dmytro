//function №1
function getMaxDigit(number) {
  let digitNumber = number.toString();
  let maxNumber = +digitNumber[0];
  let defaultNumber;

  for (let i = 0; i <= digitNumber.length; i++) {
    defaultNumber = +digitNumber[i];
    if (defaultNumber > maxNumber) {
      maxNumber = defaultNumber;
    }
  }
  return maxNumber;
}

//function №2
const powDegree = (number, degree) => {
  let result = 1;
  let currentDegree = degree;

  while (currentDegree) {
    result = number * result;
    currentDegree = currentDegree - 1;
  }
  return result;
};

//function №3
function upperName(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

//function №4
function sumTax(payment) {
  let sum = payment / 100;
  const amountTax = 18 + 1.5;
  const formulaTax = sum * amountTax;

  return payment - formulaTax;
}

//function №5
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//function №6
function countLetters(letter, word) {
  let fullWord = word.toLowerCase();
  let counter = 0;

  for (let i = 0; i <= fullWord.length; i++) {
    if (fullWord[i] === letter) {
      counter++;
    }
  }
  return counter;
}

//function №7
function convertCurrency(money) {
  let exchangeRate = 37;

  if (money.toLowerCase().includes("uah")) {
    return (parseInt(money, 10) / exchangeRate).toFixed() + "$";
  } else if (money.includes("$")) {
    return (parseInt(money, 10) * exchangeRate).toFixed() + "UAH";
  } else {
    return "Invalid value";
  }
}

//function №8
function getRandomPassword(symbols = 8) {
  let password = "";
  const firstSymbol = 0;
  const lastSymbol = 9;

  for (let i = 0; i < symbols; i++) {
    password += getRandomNumber(firstSymbol, lastSymbol);
  }
  return password;
}

//function №9
function deleteLetters(letter, word) {
  let fullWord = "";
  const defaultLetter = letter.toLowerCase();
  const defaultWord = word.toLowerCase();

  for (let i = 0; i < defaultWord.length; i++) {
    if (defaultWord[i] !== defaultLetter) {
      fullWord += defaultWord[i];
    }
  }
  return fullWord;
}

//function №10
function isPalindrome(string) {
  const defaultString = string.toLowerCase().replace(/ /g, "");
  const mirrorString = defaultString.split("").reverse().join("");

  return mirrorString === defaultString;
}
//function №11
function deleteDuplicateLetter(string) {
  const sentence = string.toLowerCase().split("");
  const deleteLetters = sentence.filter(
    (element, index, array) =>
      array.indexOf(element) === array.lastIndexOf(element)
  );

  return deleteLetters.join("");
}

// RESULTS
console.log(`Функція №1 - ${getMaxDigit(38596)}`);
console.log(`Функція №2 - ${powDegree(3, 3)}`);
console.log(`Функція №3 - ${upperName("wilLiAm")}`);
console.log(`Функція №4 - ${sumTax(1000)}`);
console.log(`Функція №5 - ${getRandomNumber(1, 10)}`);
console.log(`Функція №6 (Balaclava - "a") - ${countLetters("a", "Balaclava")}`);
console.log(`Функція №7.1 (100$) - ${convertCurrency("100$")}`);
console.log(`Функція №7.2 (3700UAH) - ${convertCurrency("3700uah")}`);
console.log(`Функція №7.3 (100€) - ${convertCurrency("100€")}`);
console.log(`Функція №8.1 (Default) - ${getRandomPassword()}`);
console.log(`Функція №8.2 (6 symbols)- ${getRandomPassword(6)}`);
console.log(`Функція №9 (Balaclava 'a') - ${deleteLetters("a", "Balaclava")}`);
console.log(`Функція №10.1 (Козак з казок) - ${isPalindrome("Козак з казок")}`);
console.log(`Функція №10.2 (Оса) - ${isPalindrome("Оса")}`);
console.log(`Функція №10.3 (Level) - ${isPalindrome("Level")}`);
console.log(
  `Функція №11 - ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`
);
