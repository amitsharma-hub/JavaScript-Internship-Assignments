
const billInput = prompt("Enter bill amount:");
const tipInput = prompt("Enter tip percentage:");

const subtotal = Number(billInput);
const tipPercentage = Number(tipInput);

if (
  billInput === null || billInput.trim() === "" ||
  tipInput === null || tipInput.trim() === "" ||
  !Number.isFinite(subtotal) ||
  !Number.isFinite(tipPercentage) ||
  subtotal < 0 || tipPercentage < 0
) {
  console.log("Please enter valid numbers.");
} else {
  const calculatedTip = subtotal * tipPercentage / 100;
  let totalAmount = subtotal;
  totalAmount += calculatedTip;

  console.log(`Subtotal: $${subtotal}`);
  console.log(`Tip Percentage: ${tipPercentage}%`);
  console.log(`Calculated Tip: $${calculatedTip}`);
  console.log(`Total Amount to Pay: $${totalAmount}`);
}
