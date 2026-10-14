
const inventory = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 25 }
];

console.log("--- Initializing Inventory System ---");

const productName = prompt("Enter new product name:");
const productPrice = prompt("Enter product price:");

if (
  productName !== null &&
  productName.trim() !== "" &&
  productPrice !== null &&
  productPrice.trim() !== "" &&
  Number.isFinite(Number(productPrice)) &&
  Number(productPrice) >= 0
) {
  inventory.push({
    name: productName.trim(),
    price: Number(productPrice)
  });
} else {
  console.log("No valid new product added.");
}

console.log("\n--- Processing Inventory Roster ---");

inventory.forEach((item) => {
  let category;

  if (item.price < 50) {
    category = "Budget";
  } else if (item.price < 200) {
    category = "Standard";
  } else {
    category = "Premium";
  }

  console.log(
    `Item: ${item.name} ($${item.price}) -> Category: ${category}`
  );
});

const totalInventoryValue = inventory.reduce(
  (total, item) => total + item.price,
  0
);

const affordableItems = inventory.filter(
  (item) => item.price < 200
);

const formattedReport = inventory.map(
  (item) => `${item.name.toUpperCase()}: $${item.price}`
);

console.log("\n--- Financial Analytics ---");
console.log(`Total Inventory Value: $${totalInventoryValue}`);

console.log(
  `Filtered Affordable Items (Under $200): ${
    JSON.stringify(affordableItems.map((item) => item.name))
  }`
);

console.log(
  `Formatted Report List: ${JSON.stringify(formattedReport)}`
);
