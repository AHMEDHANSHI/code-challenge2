function createArray(start, finish) {
    let product = [];

    // loop through
    
    if (start <= finish) {
        for (let i = start; i <= finish; i++) {
            product.push(i);
        }
    } else {
        for (let i = start; i >= finish; i--) {
            product.push(i);
        }
    }
    
    return product;
}

// Test the function
let result1 = createArray(3, 9);
console.log(result1); // Output: [3,4, 5, 6, 7, 8,9]

let result2 = createArray(-2, 6);
console.log(result2); // Output: [  -2, -1, 0, 1, 2, 3, 4, 5, 6, ]
