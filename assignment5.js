
function calculateArea(length = 5, width = 4) {
  return length * width;
}

const calculateAreaArrow = (length = 5, width = 4) => {
  return length * width;
};

console.log(
  `Standard Function Area (Default 5x4): ${calculateArea()}`
);

console.log(
  `Arrow Function Area (Custom 10x3): ${calculateAreaArrow(10, 3)}`
);

function demonstrateScope() {
  if (true) {
    let blockVar = "Inside block";
    console.log(`Inside block: ${blockVar}`);
  }

  try {
    console.log(blockVar);
  } catch (error) {
    console.log(
      "Scope Test Error: ReferenceError: blockVar is not defined (when accessed outside block)"
    );
  }
}

demonstrateScope();
