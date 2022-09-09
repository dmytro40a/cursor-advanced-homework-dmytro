//Arrays
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// First task
function studentsPairs(students) {
  const male = [],
    female = [],
    couple = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].endsWith("а")) {
      female.push(students[i]);
      continue;
    }
    male.push(students[i]);
  }
  for (let i = 0; i < female.length; i++) {
    couple[i] = [male[i], female[i]];
  }
  return couple;
}

const pairs = studentsPairs(students);
console.log(pairs);

// Second task
function selectedThemes(pairs) {
  const pairsThemes = [];
  for (let i = 0; i < pairs.length; i++) {
    let conjunction = pairs[i].join(" і ");
    pairsThemes.push([conjunction, themes[i]]);
  }
  return pairsThemes;
}

const studentsThemes = selectedThemes(pairs);
console.log(studentsThemes);

// Third task
function studentsMarks(students, marks) {
  const studentsScores = [];
  for (let i = 0; i < students.length; i++) {
    studentsScores.push([students[i], marks[i]]);
  }
  return studentsScores;
}

const scores = studentsMarks(students, marks);
console.log(scores);

// Fourth task
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min++)) + min;
}

function randomMark(studentsThemes) {
  let randomThemesScore = randomNumber(0, marks.length - 1);
  const randomThemesResult = [];
  for (let i = 0; i < studentsThemes.length; i++) {
    randomThemesResult.push(studentsThemes[i].concat(randomThemesScore));
  }
  return randomThemesResult;
}

const randomScores = randomMark(studentsThemes);
console.log(randomScores);
