export const getRandomChinese = async (length) => {
  const getChineseSymbol = () => {
    const dateNumbers = Date.now().toString().slice(-5);
    const dateSymbols = String.fromCharCode(dateNumbers);
    return dateSymbols;
  };

  const promise = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(getChineseSymbol());
      }, 50);
    });

  let symbolString = "";
  let index = 1;
  while (index <= length) {
    symbolString += await promise();
    index++;
  }
  return symbolString;
};
