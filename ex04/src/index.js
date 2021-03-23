const milili = [10, 25, 4];

function myArr(mili){
    'use strict';

    // Only change code below this line
   mili[0] = 4;
   mili[1] = 10;
   mili[2] = 25;
    // Using mili = [4, 10, 25] would be invalid

    // Only change code above this line
    return mili;
}
console.log(myArr(milili)); // Change this line

module.exports = myArr;