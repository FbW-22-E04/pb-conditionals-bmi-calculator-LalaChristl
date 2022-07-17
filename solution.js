//Q1 Store Mark's and John's mass and height in variables.
const markHeight = 1.85;
const markMass = 65.3;
const johnHeight = 1.73;
const johnMass = 58.2;

console.log("------------------------------------");

//Q2 Calculate both their BMIs and store their BMIs in variables.

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI);
console.log(johnBMI);

console.log("------------------------------------");

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const markMoreBeefCake = markBMI > johnBMI;
console.log(markMoreBeefCake);

console.log("------------------------------------");

//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

console.log(
  `Is Mark's BMI higher than John's? Why yes, it's ${markMoreBeefCake}, it is`
);

console.log("------------------------------------");

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

if (markBMI > johnBMI) {
  console.log("Q5:", markBMI.toFixed(2));
} else {
  console.log("Q5:", johnBMI.toFixed(2));
}

console.log("------------------------------------");

function calculateBMI(name, weight, height) {
  let BMI = weight / (height * height);
  console.log("Q6.", name, BMI);
}

calculateBMI("Mark", 65.3, 1.85);
calculateBMI("John", 58.2, 1.73);

console.log("------------------------------------");

function whoIsBiggest(name1, name2, bmi1, bmi2) {

  if (bmi1 > bmi2) {
    console.log('Q7.', name1);
  } else {
    console.log('Q7.', name2);
  }
}
whoIsBiggest("Mark", "John", 19.07962016070124, 19.44602225266464);

console.log("------------------------------------");

function whoIsBiggest(name1, name2, weight1, weight2, height1, height2) {

  if (weight1 / (height1 * height1) > weight2 / (height2 * height2)) {
    console.log('Q8.', name1);
  } else {
    console.log('Q8.', name2);
  }
}
whoIsBiggest("Mark", "John", 65, 48, 1.8, 1.65);
