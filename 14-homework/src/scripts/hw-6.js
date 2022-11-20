export const calculateWordLetters = (test) => {
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
