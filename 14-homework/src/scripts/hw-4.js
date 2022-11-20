export function studentsPairs(students) {
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
