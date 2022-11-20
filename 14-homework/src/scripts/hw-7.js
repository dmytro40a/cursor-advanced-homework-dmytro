export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

export function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}
