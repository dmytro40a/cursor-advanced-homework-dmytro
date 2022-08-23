// VARIABLES
let productBoots = 15.678;
let productClothes = 123.965;
let productAccessories = 90.2345;

// MAX
let productSumMax = Math.max(productBoots, productClothes, productAccessories);
console.log(productSumMax);

// MIN
let productSumMin = Math.min(productBoots, productClothes, productAccessories);
console.log(productSumMin);

// SUM
let productSum = productBoots + productClothes + productAccessories;
console.log(productSum);

// FLOOR
let productFloor = Math.floor(productSum);
console.log(productFloor);

// SUM ROUND
let productSumRounded = Math.round(productSum / 100) * 100;
let productSumRound = Math.round(productSumRounded);
console.log(productSumRound);

// BOOLEAN
let productSumFloor = Math.floor(productSum / 100) * 100;
let productSumBoolean = productSumFloor % 2 == 0;
console.log(productSumBoolean);

//SUM 500 UAH
let productAmount = 500 - productSum;
console.log(productAmount);

//TO FIXED
let productSumFixed = +(productSum / 3).toFixed(2);
console.log(productSumFixed);

//RANDOM SALE
let productDiscount = productSum * Math.max(0.3);
let productSale = productSum - Math.random() * productDiscount;
console.log(productSale);

//RANDOM SALE ROUND
let productSaleRound = +productSale.toFixed(2);
console.log(productSaleRound);

//SALE PROFIT
let productSaleProfit = productSum / 2;
let productSumProfit = productSaleProfit - productDiscount;
console.log(productSumProfit);

//ADVANCED
console.log(`
  Максимальна ціна: ${productSumMax}
  Мінімальна ціна ${productSumMin}
  Вартість всіх товарів: ${productSum}
  Округлена в меншу сторону сума всіх товарів: ${productFloor}
  Сума товарів округлена до сотень: ${productSumRound}
  Чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? ${productSumBoolean}
  Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.: ${productAmount}
  Середнє значення цін: ${productSumFixed}
  Сума до сплати з випадковою знижкою
  ${productSale}
  Випадкова знижка та округлена сума до оплати: ${productSaleRound}
  Чистий прибуток, якщо клієнт заплатив зі знижкою 30%: ${productSumProfit}`);
