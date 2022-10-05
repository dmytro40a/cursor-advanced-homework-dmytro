class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.dismiss = false;
  }
  getInfo() {
    return `Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}`;
  }
  get scores() {
    return !this.dismiss ? this.marks : null;
  }
  set scores(mark) {
    if (!this.dismiss) this.marks.push(mark);
    return;
  }
  getAverageMark() {
    let points = this.marks.reduce((acc, curr) => acc + curr);
    return points / this.marks.length;
  }

  getDismissed() {
    this.dismiss = true;
  }

  getRecovered() {
    this.dismiss = false;
  }
}
// #1
const studentMark = new Student(
  "Гарвардського університету м.Кембридж",
  "4",
  "Марк Цукерберг",
  [5, 4, 4, 5]
);
console.log(studentMark);
// #2
console.log(studentMark.getInfo());

// #3
console.log(studentMark.scores);

// #4
studentMark.scores = 5;
console.log(studentMark.scores);

// #5
console.log(studentMark.getAverageMark());

// #6
studentMark.getDismissed();
console.log(studentMark.scores);
studentMark.scores = 3;
console.log(studentMark.scores);

// #7
studentMark.getRecovered();
studentMark.scores = 4;
console.log(studentMark.scores);

// Advanced
class BudgetStudent extends Student {
  constructor(university, course, fullName, marks) {
    super(university, course, fullName, marks);
    setInterval(() => console.log(studentBill.getScholarship()), 30000);
  }
  getScholarship() {
    const scholarshipAverageMark = 4.0;
    const currentAverageMark = this.getAverageMark() >= scholarshipAverageMark;
    return !this.dismiss && currentAverageMark
      ? "Ви отримали 400$ стипендії!"
      : "Тепер ви змушені шукати роботу:(";
  }
}
const studentBill = new BudgetStudent(
  "Гарвардського університету м.Кембридж",
  "3",
  "Білл Гейтс",
  [4, 5, 4, 4]
);
