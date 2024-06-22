const add = function(...nums) {
    return nums[0] + nums[1] ;
};

const subtract = function(...nums) {
    return nums[0] - nums[1] ; 
};

const sum = function(nums) {
	
    let sum = 0 ;
    for (let i = 0 ; i<nums.length ; i++) {
        sum += nums[i] ;
    }
    return sum;
};

const multiply = function(nums) {

    let prod = 1 ;
    for (let i = 0 ; i<nums.length ; i++) {
        prod *= nums[i] ;
    }
    return prod;
};

const power = function(...nums) {
    let pow = 1 ;
    for (let i = 0 ; i<nums[1] ; i++) {
        pow *= nums[0];
    }
    return pow;
};

const factorial = function(...nums) {
    let fact = 1 ;
    for (let i = 1 ; i<=nums[0] ; i++) {
        fact *= i ;
    }
    return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
