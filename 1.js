// Anonymous function with specified conditions
const myAnonymousFunc = function (value) {
    if (typeof value === 'number') {
        return value * 3; // Triple the number
    } else if (typeof value === 'string') {
        return 'ARRR!'; // Replace string with "ARRR!"
    } else {
        return value; // Return unchanged for other types
    }
};

// Sample array
const arr = ['Elocution', 21, 'Clean teeth', 100];

// Use the map method with the anonymous function
const transformedArr = arr.map(myAnonymousFunc);

// Print the results
console.log("Original arr:", arr);
console.log("Transformed arr:", transformedArr);
