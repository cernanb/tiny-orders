// //  orders db
// let taxRate = 0.08;

const orders = [
  { id: 1, customer: "John Doe", total: 100 },
  { id: 2, customer: "Jane Smith", total: 130 },
  { id: 3, customer: "Bob Johnson", total: 90 },
];

// const calculateTax = (price, rate) => price * rate;

// function calculateFinalPrice(price) {
//   return price + calculateTax(price, taxRate);
// }

// // Array.map
// const finalPrices = orders.map(function (order) {
//   const finalPrice = calculateFinalPrice(order.total);
//   return finalPrice;
// });

// // console.log(finalPrices);
// // 108, 216, 324

// const transformedOrders = orders.map(function (order) {
//   return { ...order, customer: order.customer.toUpperCase() };
// });

// console.log(transformedOrders);
// console.log(orders);

const premiumOrders = orders.filter((order) => order.total > 150);

// console.log(premiumOrders);
// console.log(orders);

const janesOrders = orders.filter((order) => order.customer.includes("Jane"));

console.log(janesOrders);
