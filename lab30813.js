// Fiz Bizz Problem
//let i = 1;

// for(i = 1; i <= 100 ; i++){
//     if((i % 3) && (i % 5) ){
//         console.log("Fizz Buzz");
//     }else if (i % 5 === 0)
//        console.log("Buzz");
//     }  if(i % 3 === 0)
//         console.log("Fizz");                              
//     else{
//        if (!(i % 3) || !(i % 5)){
//             console.log("log number");
//     }
// }

// finding the prime numbers part - 2
// Define the limit up to which you want to find prime numbers
// PRIME NUMBER

//   const num = 5; // 5 5/4, 5/3, 5/2 6 6/5 6/4 6/3 

// mainLoop: for(let i=num; i<1000; i++) { // i = 5, i=6, i=7
//     // 1 is not prime
//     if(num === 1) continue; 

//     for(let j=num; j>1; j--) { // j = 5, j = 4 6/4 6/3 7/6, 7/5, 7/4, 7/3, 7/2, j=1
//         if(i % j === 0) continue mainLoop; // We are looking for the NEXT PRIME NUMBER;
//     }

//     console.log(i);

//     break;
// }

// Create CSV file and print the data
//const csvfile = `ID,Name,Occupation,Age\\n
//42,Bruce,Knight,41\\n
//57,Bob,Fry Cook,19\\n
//63,Blaine,Quiz Master,58\\n
//98,Bill,Doctor’s Assistant,26`

//const rows = csvfile.split('\n');

//for (let i = 0; i < rows.length ; i++){
    //console.log(rows[i]);
    
//}

//Declare a variable that stores the number of columns in each row of data within the CSV.
//Instead of hard-coding four columns per row, 
//expand your code to accept any number of columns.
 //This should be calculated dynamically based on the first row of data.

//   const csvString = `ID,Name,Occupation,Age\\n
//     42,Bruce,Knight,41\\n
//     57,Bob,Fry Cook,19\\n
//     63,Blaine,Quiz Master,58\\n
//     98,Bill,Doctor’s Assistant,26`;

//  // Split the CSV string into rows
//    const rows = csvString.split('\\n');

//    // Declare a variable to store the number of columns
//       let numberOfColumns;

//    // Calculate the number of columns based on the first row
//        numberOfColumns = rows[0].split(',').length;
       
//    // Print the number of columns
//      console.log('Number of columns:', numberOfColumns);

//    // Loop through the rows and print each one

//        rows.forEach((row, index) => {
//         console.log(rows);

//       // Split the row into columns
//         const columns = row.split(',');
    
//      // Print each column of the current row
//          console.log(`Row ${index + 1}:`);
//          columns.forEach((column, columnIndex) => {
//          console.log(`Column ${columnIndex + 1}: ${column}`);
//      });
//  });




   
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
 

//     const csvString = `ID,Name,Occupation,Age\\n42,Bruce,Knight,41\\n57,Bob,Fry Cook
//    ,19\\n63,Blaine,Quiz Master,58\\n98,Bill,Doctor’s Assistant,26`;

//  // Split the CSV string into rows
//       const rows = csvString.split('\\n');

//     // Initialize an empty array to hold the two-dimensional array
//        const twoDimensionalArray = [];

//  // Loop through each row
//    rows.forEach(row => {
//     // Split the row into columns and add it to the two-dimensional array
//     twoDimensionalArray.push(row.split(','));
//  });

// // // Now twoDimensionalArray contains all the data
// // // The heading row is at index 0, and each subsequent index contains a row of data

//  // To access the heading row
//      console.log('Heading row:', twoDimensionalArray[0]);

//  // To access the first data row
//      console.log('First data row:', twoDimensionalArray[1]);

//    // To print the entire data
//    console.log('Complete data:', twoDimensionalArray);


// const csvString = `ID,Name,Occupation,Age
// 42,Bruce,Knight,41
// 57,Bob,Fry Cook,19
// 63,Blaine,Quiz Master,58
// 98,Bill,Doctor’s Assistant,26`;

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

// // Now `twoDimensionalArray` contains all the data
// // Access the header row using `twoDimensionalArray[0]`
// // Access other data rows using `twoDimensionalArray[1]`, `twoDimensionalArray[2]`, etc.

// // Print the entire two-dimensional array for verification
// console.log('Two-dimensional array:', twoDimensionalArray);



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
// const array = ['ID' , 'Name', 'Occupation', 'Age'];
// const Objectlowercase = {} ;


// // Loop through the remaining rows (data rows)
// for (let i = 1; i < rows.length; i++) {
//     const dataRow = rows[i].split(';');
//     const dataObject = {};
//     const key = array[i].toLowerCase();
//     Objectlowercase[key] = '' ;

//     // Create an object for each row
//     headers.forEach((header, index) => {
//         dataObject[header] = dataRow[index];
//     });

//     dataObjects.push(dataObject);
// }

// // Now `dataObjects` contains all your data as objects
// console.log(dataObjects);
// console.log(Objectlowercase);


// const data = [
//     { ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' },
//     { ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' },
//     { ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' },
//     { ID: '98', Name: 'Bill', Occupation: 'Doctor’s Assistant', Age: '26' }
// ];

// // Extract the column headings (assuming they are in the first row)
// const columnHeadings = Object.keys(data[0]);

// // Initialize an array to store the transformed data
// const transformedData = [];

// // Loop through each row and create an object with lowercase keys
// for (let i = 0; i < data.length; i++) {
//     const row = data[i];
//     const transformedRow = {};

//     // Convert each key to lowercase and assign the value
//     for (const heading of columnHeadings) {
//         transformedRow[heading.toLowerCase()] = row[heading];
//     }

//     transformedData.push(transformedRow);
// }

// // Print the transformed data
// console.log(transformedData);



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
  let numberOfPeople = 0;
  
  // Loop through each object in the array
  for (let i = 0; i < people.length; i++) {
    // Add the age of each person to totalAge
    totalAge += parseInt(people[i].age);
    // Increment the count of people
    numberOfPeople++;
  }
  
  // Calculate the average age
  const averageAge = totalAge / numberOfPeople;
  
  // Log the average age to the console
  console.log("The average age is:", averageAge);
  