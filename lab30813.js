// Fiz Bizz Problem
//let i = 1;

for(i = 1; i <= 100 ; i++){
    if((i % 3) && (i % 5) ){
        console.log("Fizz Buzz");
    }else if (i % 5 === 0)
       console.log("Buzz");
    }  if(i % 3 === 0)
        console.log("Fizz");                              
    else{
       if (!(i % 3) || !(i % 5)){
            console.log("log number");
    }
}

// finding the prime numbers part - 2
// Define the limit up to which you want to find prime numbers
// PRIME NUMBER

  const num = 5; // 5 5/4, 5/3, 5/2 6 6/5 6/4 6/3 

mainLoop: for(let i=num; i<1000; i++) { // i = 5, i=6, i=7
    // 1 is not prime
    if(num === 1) continue; 

    for(let j=num; j>1; j--) { // j = 5, j = 4 6/4 6/3 7/6, 7/5, 7/4, 7/3, 7/2, j=1
        if(i % j === 0) continue mainLoop; // We are looking for the NEXT PRIME NUMBER;
    }

    console.log(i);

    break;
}

// Create CSV file and print the data
const rows = csvfile.split('\n');

for (let i = 0; i < rows.length ; i++){
    console.log(row[i]);
}