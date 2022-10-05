// variables
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// #1
function getMyTaxes(salary) {
  return this.tax * salary;
}
console.log(getMyTaxes.call(ukraine, 4000));

// #2
function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(latvia));

// #3
function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(litva));

// #4
function getMySalary() {
  const mySalaryTimer = () => {
    let sumSalary = getRandomNumber(1500, 2000);
    let sumTaxes = +(sumSalary * this.tax).toFixed(2);
    let sumProfit = +(sumSalary - sumTaxes).toFixed(2);

    return {
      salary: sumSalary,
      taxes: sumTaxes,
      profit: sumProfit,
    };
  };
  setInterval(() => console.log(mySalaryTimer()), 10000);
}
getMySalary.call(ukraine);

// random number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
