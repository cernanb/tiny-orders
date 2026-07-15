// difference between parameter and argument

// function calculatePrice(price, rate) {
//   // price and rate are parameters for the calculatePrice function
//   return price * rate;
// }

// // 99 and .8 are the arguments that we pass in to calculatePrice
// console.log(calculatePrice(99, 0.8));

// global
function calculateTax(price) {
  return price * 0.2;
}

function checkout(price) {
  // function scope of checkout
  function calculateTax() {
    return price * 0.1;
  }

  return price + calculateTax();
}

console.log(calculateTax(200));
