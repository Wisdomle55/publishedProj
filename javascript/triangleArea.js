Math;

sideOne = 5;
sideTwo = 6;
sideThree = 7;

/**Heron's formula */
semiPerimeter=(sideOne+sideTwo+sideThree)/2;
triangleArea = Math.sqrt(semiPerimeter*(semiPerimeter-sideOne)*(semiPerimeter*sideTwo)*(semiPerimeter-sideThree));
console.log(triangleArea);