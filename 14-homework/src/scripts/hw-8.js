export class Student {
  constructor(university, course, fullName, marks) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.dismiss = false;
  }
  getInfo() {
    return `Студент ${this.course}-го курсу, ${this.university}, ${this.fullName}, ${this.marks}`;
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
export const studentMark = new Student(
  "Гарвардського університету м.Кембридж",
  "4",
  "Марк Цукерберг",
  [5, 4, 4, 5]
);
