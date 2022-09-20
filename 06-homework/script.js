// Variables
const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// #1
const getSubjects = (student) => {
  const studentKeys = Object.keys(student.subjects);
  let studentSubjects = [];

  studentKeys.forEach((sk) => {
    let upperSubject = sk[0].toUpperCase() + sk.slice(1);
    studentSubjects.push(upperSubject.replace("_", " "));
  });
  return studentSubjects;
};
console.log(getSubjects(students[0]));

// #2
const getAverageMark = (student) => {
  const subjectValues = Object.values(student.subjects).flat();
  const subjectMarks = subjectValues.reduce((acc, item) => acc + item);
  return (subjectMarks / subjectValues.length).toFixed(2);
};
console.log(getAverageMark(students[0]));

// #3
const getStudentInfo = (student) => {
  const StudentInfo = {
    name: student.name,
    course: student.course,
    averageMark: getAverageMark(student),
  };
  return StudentInfo;
};
console.log(getStudentInfo(students[0]));

// #4
const getStudentsNames = (students) => students.map((sn) => sn.name).sort();
console.log(getStudentsNames(students));

// #5
const getBestStudent = (students) => {
  const bestMark = [];

  for (let i = 0; i < students.length; i++) {
    bestMark.push(+getAverageMark(students[i]));
  }
  maxMark = bestMark.indexOf(Math.max(...bestMark));
  return students[maxMark].name;
};
console.log(getBestStudent(students));

// #6
const calculateWordLetters = (test) => {
  const calc = {};
  const wordLetters = test.split("");

  wordLetters.forEach((item) => {
    if (!calc[item]) {
      calc[item] = 1;
    } else {
      calc[item] += 1;
    }
  });
  return calc;
};
console.log(calculateWordLetters("тест"));
