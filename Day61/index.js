let random = Math. random()
let a = prompt("Enter First Number: ");
let b = prompt("Enter Operation: ");
let c = prompt("Enter Sceond Number: ");
let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*"
}
if (random>0.1){
    alert(`The Answer is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    c = obj[c]
    alert(`The Answer is ${eval(`${a} ${b} ${c}`)}`);
}