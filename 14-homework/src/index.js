import "./styles/styles.css";
import backgroundImage from "./scripts/bg-img";
backgroundImage();

import { sumTax } from "./scripts/hw-3";
console.log(sumTax(10000));

import { studentsPairs } from "./scripts/hw-4";
console.log(
  studentsPairs(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"])
);

import { getModa } from "./scripts/hw-5";
console.log(getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

import { calculateWordLetters } from "./scripts/hw-6";
console.log(calculateWordLetters("тестер"));

import { getTotalTaxes, ukraine } from "./scripts/hw-7";
console.log(getTotalTaxes.call(ukraine));

import { studentMark } from "./scripts/hw-8";
console.log(studentMark.getInfo());

import { generateBlocks } from "./scripts/hw-9";
generateBlocks();

import { getRandomChinese } from "./scripts/hw-11";
getRandomChinese(4).then((value) => console.log(value));
