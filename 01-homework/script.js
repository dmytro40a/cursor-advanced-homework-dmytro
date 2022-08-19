// VARIABLES
let productBoots = 15.678;
let productClothes = 123.965;
let productAccessories = 90.2345;

// MAX
console.log(Math.max(productBoots, productClothes, productAccessories));

// MIN
console.log(Math.min(productBoots, productClothes, productAccessories));

// SUM
let productSum = productBoots + productClothes + productAccessories;
console.log(productSum);

// FLOOR
let productFloor = Math.floor(
  productBoots + productClothes + productAccessories
);
console.log(productFloor);

// SUM ROUND
let productSumRounded = Math.round(productSum / 100) * 100;
console.log(Math.round(productSumRounded));

// BOOLEAN
let productSumFloor = Math.floor(productSum / 100) * 100;
let productSumBoolean = productSumFloor % 2 == 0;
console.log(productSumBoolean);

//SUM 500 UAH
console.log(500 - productSum);

//TO FIXED
console.log(+(productSum / 3).toFixed(2));

//RANDOM SALE
let productSale = productSum - Math.random();
console.log(productSale);

//RANDOM SALE ROUND
console.log(+productSale.toFixed(2));

//SALE PROFIT
let productSaleProfit = productSum / 2;
let productDiscount = productSum * 0.3;
console.log(productSaleProfit - productDiscount);

//ADVANCED
console.log(`
  Максимальна ціна: ${Math.max(
    productBoots,
    productClothes,
    productAccessories
  )}
  Мінімальна ціна ${Math.min(productBoots, productClothes, productAccessories)}
  Вартість всіх товарів: ${productSum}
  Округлена в меншу сторону сума всіх товарів: ${productFloor}
  Сума товарів округлена до сотень: ${Math.round(productSumRounded)}
  Чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом? ${productSumBoolean}
  Сума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.: ${
    500 - productSum
  }
  Середнє значення цін: ${+(productSum / 3).toFixed(2)}
  Сума до сплати з випадковою знижкою
  ${productSale}
  Випадкова знижка та округлена сума до оплати: ${+productSale.toFixed(2)}
  Чистий прибуток, якщо клієнт заплатив зі знижкою 30%: ${
    productSaleProfit - productDiscount
  }`);
