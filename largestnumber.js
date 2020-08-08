

function findLargestNumber (numbers){
        largestNumber = numbers[0];
    for(i=0; i<numbers.length; i++){
        var element = numbers[i];
        if (element> largestNumber){
            largestNumber = element;
        }
    }
    return largestNumber;
}





var array1 = [45, 65, 47, 99, 47, 33];
var output = findLargestNumber(array1);
console.log('output', output);