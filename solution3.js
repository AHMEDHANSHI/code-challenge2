function findPrime(num) {
    if(num<2){
        return false;
    }
    
    for(let i=2; i<=Math.sqrt(num); i++) {
        if(num%i===0) {
            return false;
        }
    }
    return true;
}
function filterPrimes(arr) {
    // callback function
    return arr.filter(findPrime);
  }
   const inputArray=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   const primeArray=filterPrimes(inputArray);
   console.log(primeArray); // Output: [ 2, 3, 5, 7 ]