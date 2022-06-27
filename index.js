// Callback function
function amount(num) {
  console.log(num * num);
}

function total(callback) {
  const num = 10;
  callback(num);
}

total(amount);
