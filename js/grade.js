var grade = 100 * Math.random();
console.log(grade);
if (grade < 60) {
  grade = "F";
} else if (grade < 70) {
  grade = "D";
} else if (grade < 80) {
  grade = "C";
} else if (grade < 90) {
  grade = "B";
} else {
  grade = "A";
}
console.log(grade);
