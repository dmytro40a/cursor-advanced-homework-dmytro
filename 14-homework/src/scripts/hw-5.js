export const getModa = (...numbers) => {
  const mode = {};
  let max = 0,
    count = 0;

  numbers.forEach((item) => {
    if (mode[item]) {
      mode[item]++;
    } else {
      mode[item] = 1;
    }

    if (count < mode[item]) {
      max = item;
      count = mode[item];
    }
  });

  return max;
};
