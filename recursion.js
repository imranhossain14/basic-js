// iterative or for loop
// 5!= 5*4!
function factorial(num){
    var fact =1;
    for(var i=1; i<=num; i++){
        fact =fact*i;
        
    }
    return fact;
}
var result = factorial(5);
console.log('result', result);

// recursive


function factorialRecursive(num1){

    if(num1==1){
        return 1;
    }
    else {
        console.log(num1, num1-1);
        return num1*factorialRecursive(num1-1); // 5*4*3*2*1
    }

}


var result = factorialRecursive(5);
console.log('result', result);
