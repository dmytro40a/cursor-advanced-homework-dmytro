export function sumTax(payment) {
  let sum = payment / 100;
  const amountTax = 18 + 1.5;
  const formulaTax = sum * amountTax;

  return payment - formulaTax;
}
