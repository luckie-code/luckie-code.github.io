//JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given
//The solution would work like the following:
//getEvenNumbers([2,4,5,6]) // should == [2,4,6]

//solution 1
function getEvenNumbers(numbersArray){
    return numbersArray.filter(
      function(n){
      return n % 2 == 1;
    });
  }
console.log(getEvenNumbers([2,4,5,6]))