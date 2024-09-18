// function about(name){
//     console.log("Hey "+ name+" you are look good");
//     console.log("Hey "+ name+" you are a good boy");
//     console.log("Hey "+ name+" you are a coder");
// }
// about("Dhwoni");
// This is sum1
/*
function sum(a, b) {
    console.log("Sum of " + a + " and " + b + " is " + (a + b));
}
sum(2,6)
*/
function sum(a=0, b=0 ,c=0){
    return a + b + c
}
a = sum(3)
b = sum(3,0,5)
c = sum(4,2,5)
d = sum(9,8,6)
e = sum(11,12,13)
console.log("Sum: "+ a);
console.log("Sum: "+ b);
console.log("Sum: "+ c);
console.log("Sum: "+ d);
console.log("Sum: "+ e);