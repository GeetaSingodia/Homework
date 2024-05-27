//Loop through the characters of a given CSV string.
//Store each “cell” of data in a variable.
//When you encounter a comma, move to the next cell.
//When you encounter the “\r\n” sequence, move to the next “row.”
//Log each row of data.

// Part 1 using array or objects printing the CSV file

//const csvString = `ID,Name,Occupation,Age\\n
//42,Bruce,Knight,41\\n
//57,Bob,Fry Cook,19\\n
//63,Blaine,Quiz Master,58\\n
//98,Bill,Doctor’s Assistant,26`;

// Split the CSV string into rows
//const rows = csvString.split('\\n');

// Loop through the rows and print each one
//rows.forEach((row, i)  => {
    // Skip the header row
    //if (i === 0) {
  //      console.log(row);
   // } else {
     //   console.log(row);
   // }
//})


//Declare a variable that stores the number of columns in each row of data within the CSV.
//Instead of hard-coding four columns per row, 
//expand your code to accept any number of columns.
 //This should be calculated dynamically based on the first row of data.

//  const csvString = `ID,Name,Occupation,Age\\n
//  42,Bruce,Knight,41\\n
//  57,Bob,Fry Cook,19\\n
//  63,Blaine,Quiz Master,58\\n
//  98,Bill,Doctor’s Assistant,26`;

// // Split the CSV string into rows
// const rows = csvString.split('\\n');

// // Declare a variable to store the number of columns
// let numOfCols;

// // Calculate the number of columns based on the first row
// numOfCols = rows[0].split(',').length;

// // Print the number of columns
// console.log('Number of columns:', numOfCols);

// // Loop through the rows and print each one
// rows.forEach((row, i) => {
//     // Split the row into columns
//     const columns = row.split(',');
    
//     // Print each column of the current row
//     console.log(`Row ${i + 1}:`);
//     columns.forEach((column, columnIndex) => {
//         console.log(`Column ${columnIndex + 1}: ${column}`);
//     });
// });


// part 3 show the out put in 2 dimensional Array
//------------------------------------------------------
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use

// const csvString = `ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
//  63,Blaine,Quiz Master,58
//  98,Bill,Doctor’s Assistant,26`;

// // Split the CSV string into rows
// const rows = csvString.split('\n');

// // Initialize an empty two-dimensional array
// const twoDimensionalArray = [];

// // Split the header row into columns and store it as the first row
// const headerRow = rows[0].split(',');
// twoDimensionalArray.push(headerRow);

// // Loop through the remaining rows and split them into columns
// for (let i = 1; i < rows.length; i++) {
//     const dataRow = rows[i].split(',');
//     twoDimensionalArray.push(dataRow);
// }

// Now `twoDimensionalArray` contains all the data
// Access the header row using `twoDimensionalArray[0]`
// Access other data rows using `twoDimensionalArray[1]`, `twoDimensionalArray[2]`, etc.

// Print the entire two-dimensional array for verification
//console.log('Two-dimensional array:', twoDimensionalArray);



// part 4 transform Array into object
//=============================================

// For each row of data in the result array produced by your code above,
//  create an object where the key of each value is the heading for that value’s column.
// Convert these keys to all lowercase letters for consistency.
// Store these objects in an array, in the order that they were originally listed.
// Since the heading for each column will be stored in the object keys, 
// you do not need to create an object for the heading row itself.


// const csvString = `ID;Name;Occupation;Age
// 42;Bruce;Knight;41
// 57;Bob;Fry Cook;19
// 63;Blaine;Quiz Master;58
// 98;Bill;Doctor’s Assistant;26`;

// // Split the CSV string into rows
// const rows = csvString.split('\n');

// // Extract headers (assuming the first row contains headers)
// const headers = rows[0].split(';');

// // Initialize an empty array to store data objects
// const dataObjects = [];

// // Loop through the remaining rows (data rows)
// for (let i = 1; i < rows.length; i++) {
//     const dataRow = rows[i].split(';');
//     const dataObject = {};

//     // Create an object for each row
//     headers.forEach((header, index) => {
//         dataObject[header] = dataRow[index];
//     });

//     dataObjects.push(dataObject);
// }

// // Now `dataObjects` contains all your data as objects
// console.log(dataObjects);

// // remove the last element from sorted array

// const data1 = [
//     { ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' },
//     { ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' },
//     { ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' },
//     { ID: '98', Name: 'Bill', Occupation: 'Doctor’s Assistant', Age: '26' }
// ];

// data1.pop();
// console.log(data1);

// // add the following data at index 1
// //  { id: "48", name: "Barry", occupation: "Runner", age: "25" }

//   data1.unshift({ id: "48", name: "Barry", occupation: "Runner", age: "25"});
//   console.log(data1);

//  // Add the following object to the end of the array:
// //{ id: "7", name: "Bilbo", occupation: "None", age: "111" }

//   data1.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
//   console.log(data1);


// Find tha Average age

// Array of objects with id, name, occupation, and age
const people = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];
  
  // Initialize totalAge and numberOfPeople
  let totalAge = 0;
  let noOfPeople = 0;
  
  // Loop through each object in the array
  for (let i = 0; i < people.length; i++) {
    // Add the age of each person to totalAge
    totalAge += parseInt(people[i].age);
    // Increment the count of people
    noOfPeople++;
  }
  
  // Calculate the average age
  const averageAge = totalAge / noOfPeople;
  
  // Log the average age to the console
  console.log("The average age is:", averageAge);
  