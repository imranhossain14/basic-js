// function biggestNumber(numbers){
//     var smallest = numbers[0];
//     for (var i = 0; i < numbers.length; i++){
//         var currentNumber = numbers [i];
//         if (currentNumber>smallest){
//             currentNumber=smallest
//         }  
//     }
//     return smallest; 
// }

// var smallestNumber = biggestNumber([2, 5, 8, 10, 32,158,669]);
// console.log(smallestNumber);


function tinyFriend(name){
    
    var smallest = name[0].length;
    var smallestName = name[0];
    var currentName;
    for (var i = 0; i < name.length; i++){
        //console.log(name[i]);
        if(name[i]) {
        var currentNameLength = name[i].length;
        if (currentNameLength<smallest){
            smallest = currentNameLength;
            smallestName = name[i];
        }  
    }else {
        return "Dont"
    }
}
    return smallestName;
    //return smallest; 
    
}

var smallestName = tinyFriend(['kfffgd', '', 'Imran', 'kalibor', 'katrina']);
console.log(smallestName);


/*

function findMinLengthOfThreeWords( word1, word2, word3 ) {
    let words = [ word1, word2, word3];   // create an array of the words
  
    for ( i = 0; i < words.length; i++ ){   // Looping through the array to find index
      let length = words[i].length;    // Setting  variable 'length' as the length of an index in the array
      let min = Math.min(length);   // Setting variable 'min' to index in the array that's the shortest
      return min;   // min should return whatever length is the shortest?
    }
  }
var smallestName = findMinLengthOfThreeWords(['kader', 'Ari', 'Imran', 'kalibor', 'katrina']);
console.log(smallestName);



var arr = ['ca', 'giants', 'daughters', 'ice'];
var min = Math.min.apply(Math, arr.map(function(str) { return str.length; }));
console.log(min);
*/