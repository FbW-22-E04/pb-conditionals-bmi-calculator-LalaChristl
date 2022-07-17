# Programming Basics: BMI Calculator
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: `BMI = mass / (height * height)`. (mass in kg, i.e. 72.5, and height in meters, i.e. 1.65).

1. Store Mark's and John's mass and height in the variables `markHeight`, `markMass`, `johnHeight`, `johnMass`.
2. Calculate both their BMIs and store the values in the variables `markBMI`, `johnBMI`. 
3. Create the boolean variable `markMoreBeefCake` containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from task 3 using string interpolation. (e.g. "Q4: Is Mark's BMI higher than John's? Why yes, it's [boolean], it is") please add "Q4:" at the beginning of the logged text. 
5. Create an *if* statement to print the name of the person with highest BMI and their BMI (fixed to two numbers after decimal) (e.g. "Q5: Mark xx.xx") please add "Q5:" at the beginning of the logged text.

<!-- ------------------------------------------ -->

Let's revisit our BMI Calculator exercise and change the code so it uses functions.

Navigate your way back to your BMI Calculator GitHub exercise repo
Create a new branch for this new version of the code so the original one stays untouched and work in the new branch
Instead of having global variables and doing the calculations in the global scope, create two functions:
calculateBMI takes three arguments: a name string, a weight number and a height number. It returns a string with the name and BMI number
whoIsBiggest takes four arguments: two name strings and two bmi numbers. It returns the name string of the bigger person
Bonus

Rewrite the whoIsBiggest function to take six arguments: Person 1 name, Person 2 name, Person 1 weight, Person 2 weight, Person 1 height, Person 2 height
The whoIsBiggest function should use the calculateBMI function to calculate the BMI for both people, before comparing them and returning the name of the person with the bigger BMI (that means that in the global scope only the whoIsBiggest function is called)