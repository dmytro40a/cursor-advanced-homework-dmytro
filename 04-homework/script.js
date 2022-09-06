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
  const studentsName = students.slice(),
    male = [],
    female = [],
    createdPairs = [];
  for (let i = 0; i < studentsName.length; i++) {
    if (studentsName[i].endsWith("а")) {
      female.push(studentsName[i]);
      continue;
    }
    male.push(studentsName[i]);
  }
  if (male.length >= female.length) {
    createdPairs.length = male.length;
  }
  for (let i = 0; i < createdPairs.length; i++) {
    createdPairs[i] = [male[i], female[i]];
  }
  return createdPairs;
}

const pairs = studentsPairs(students);
console.log({ pairs });

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
console.log({ studentsThemes });

// Third task
function studentsMarks(students, marks) {
  const studentsScores = [];
  for (let i = 0; i < students.length; i++) {
    studentsScores.push(new Array(students[i], marks[i]));
  }
  return studentsScores;
}

const scores = studentsMarks(students, marks);
console.log({ scores });

// Fourth task
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min++)) + min;
}

function randomMark(studentsThemes) {
  const randomThemesScore = [...studentsThemes];

  for (let i = 0; i < randomThemesScore.length; i++) {
    randomThemesScore[i] = randomThemesScore[i].toString().split(",");
  }
  for (let i = 0; i < themes.length; i++) {
    randomThemesScore[i].push(randomNumber(0, marks.length - 1));
  }
  return randomThemesScore;
}

const randomScores = randomMark(studentsThemes);
console.log({ randomScores });
