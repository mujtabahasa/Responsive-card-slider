// let city = prompt("Enter the City name!")
// let cityArr = ["Karachi","Lahore","Peshawar","Islamabad"];
// for(var i =0; i < cityArr.length; i++){
//     if(cityArr[i] == city){
//         alert("City has found")
//     }else{
//         alert("City has not found");
//     }   
// }

// let city = prompt("Enter the City name!");
// let cityArr = ["Karachi", "Lahore", "Peshawar", "Islamabad"];
// let cityFound = false;

// for (var i = 0; i < cityArr.length; i++) {
//     if (cityArr[i] === city) {
//         alert("City has found");
//         break; // Add a break statement to exit the loop when the city is found
//     }else{
//         alert("City are not found");
//     }
// }








// let numbers = [12, 5, 8, 10, 15, 20];
// let evenNumbers = [];
// let oddNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenNumbers.push(numbers[i]);
//     } else {
//         oddNumbers.push(numbers[i]);
//     }
// }

// console.log("Even Numbers:", evenNumbers);
// console.log("Odd Numbers:", oddNumbers);





// let city = prompt("Enter the City name!");
// let cityArr = ["Karachi", "Lahore", "Peshawar", "Islamabad"];
// let cityFound = false;

// for (var i = 0; i < cityArr.length; i++) {
//     if (cityArr[i] === city) {
//         cityFound = true;
//         break; // Add a break statement to exit the loop when the city is found
//     }
// }

// if (cityFound) {
//     alert("City has been found!");
// } else {
//     alert("City has not been found.");
// }
// let numbers = [12, 5, 8, 10, 15, 20];
// let smallest = numbers[0];
// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//         smallest = numbers[i];
//     }

//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log("Smallest Number:", smallest);
// console.log("Largest Number:", largest);


// let userInput = prompt("Enter a number:");
// let factorialResult = 1;

// // Check if the input is a valid non-negative number
// if (isNaN(userInput) || userInput < 0) {
//     console.log("Please enter a valid non-negative number.");
// } else {
//     userInput = parseInt(userInput);

//     // Calculate factorial using a for loop
//     for (let i = 1; i <= userInput; i++) {
//         factorialResult *= i;
//     }

//     console.log(`The factorial of ${userInput} is: ${factorialResult}`);
// }


// let city = prompt("Enter the name of city");
// let firstChar = city.slice(0,1);
// let otherChar = city.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();
// let finalChar = firstChar.concat(otherChar);

// let cityFound = ''
// let arr = ["Karachi","Lahore","Islamabad"];
// for(var i =0; i < arr.length; i++){
//      if(finalChar == arr[i]){
//         cityFound = true;
//      }
// }
// if(cityFound == true){
//     alert("City has found");
// }else{
//     alert("City has not found")
// }




