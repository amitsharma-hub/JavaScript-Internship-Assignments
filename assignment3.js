
const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

let description;

switch (grade) {
  case "A":
    description = "Excellent";
    break;
  case "B":
    description = "Very Good";
    break;
  case "C":
    description = "Good";
    break;
  case "D":
    description = "Needs Improvement";
    break;
  default:
    description = "Failed";
}

const status = score >= 40 ? "Passed" : "Failed";

console.log(`Score: ${score}`);
console.log(`Grade: ${grade}`);
console.log(`Grade Description: ${description}`);
console.log(`Status: ${status}`);
