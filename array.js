
var friendAge = [15, 17, 19, 25, 45, 69];
console.log(friendAge);
console.log(friendAge[2]);

// array theke variable value neya
var sonaliAge =friendAge[2];
console.log(sonaliAge);

// insert or update value in array

friendAge [1]= 21;
console.log(friendAge);

// find the array position/index

var position =friendAge.indexOf(25);
console.log(position);

// jodi jei value diye index khujtesi oita array te na thakle -1 show korbe
var position1 =friendAge.indexOf(24);
console.log(position1);

// adding another element in array-> push in array. by default last one a add kore

friendAge.push(95);
friendAge.push(11,19,17,15);
console.log(friendAge);
// find number of element in arrayt by lenght
console.log(friendAge.length);

// kawke ber kore deya-> pop from delay. by default last one remove kore

friendAge.pop();
console.log(friendAge);


// adding an element o the beginning of an array using unshift() try this:

console.log(friendAge);
friendAge.unshift(31);
console.log(friendAge);

// adding multiple element to the beginning of an array

console.log(friendAge);
friendAge.unshift(91,25,15);
console.log(friendAge);

//Add Element(s) to the Middle of an Array Using splice()
// array.splice( start, deleteCount [, item1 [, item2 [, ...] ] ] )
console.log("Add element in the middle");
console.log(friendAge);
friendAge.splice(1,0,66); // at index position 1, remove 0 elements, then add "66 to that
console.log(friendAge);
//To add multiple elements in the middle of an array using splice() try this:
friendAge.splice(1,0,99,55,45); // at index position 1, remove 0 elements, then add "66 to that
console.log(friendAge);


//To add some elements to another array using concat() do the following:

var list = ["foo", "bar"];
var newlist = list.concat( ["baz", "qux"] );
console.log(newlist);
//["foo", "bar", "baz", "qux"] // newlist result


