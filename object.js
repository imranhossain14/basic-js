var student ={
    //propertry
    id:121,
    phone : 25,
    name : "Imran",
};

 var student2 ={
    //propertry
    id:12,
    phone:01935306061,
    name:"Kabir",
};

console.log(student);
console.log(student2);
// double quote diye property dite hobe
// upday 1
var phoneNo = student["phone"];
console.log(phoneNo);

//upday2
var phoneNo1 =student.phone;
console.log(phoneNo1);

//upday3

var phoneProName = "phone";
var phoneNo4= student[phoneProName];
console.log(phoneNo4);

// change property data
//upday 1
student2.phone=999999;
console.log(student2);

//upday2
console.log("Upday 2");
student2["phone"] =666666;
console.log(student2);


//upday3
console.log("Upday 3");

student2[phoneProName] =777777;
console.log(student2);

// new property add

student2.cinema = "My name is Khan";
console.log(student2);
student2["cinema"]="smart girl";
console.log(student2);