let a = Number(prompt("Enter First Number: "));
let b = Number(prompt("Enter Second Number: "));

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");
}
alert(`Sum of ${a} + ${b} = ${a+b}`); //GOOD

// but
// let a = prompt("Enter First Number:");
// let b = prompt("Enter Second Number: ");
// alert("Answer: ", parseInt(a)+parseInt(b) ); ***** //Baker

try {
    alert("Sum of",a,b ,"is",dh); //GOOD
 
} catch (error) {
    alert("Error aasa galo ")
}