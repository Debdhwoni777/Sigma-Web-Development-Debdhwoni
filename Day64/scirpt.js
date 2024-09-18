
let first, second, third;

// First Number 
let rand1 = Math.random();
if(rand1<0.33){
    first = "Crazy";
}
else if(rand1<0.66 && rand1>=0.33){
    first = "Amazing";
}
else{
    first = "Fire";
}
// Second Number
let rand2 = Math.random();
if(rand2<0.33){
    second = "Engine";
}
else if(rand2<0.66 && rand2>=0.33){
    second = "Foods";
}
else{
    second = "Garments";
}

// Third Number
let rand3 = Math.random();
if(rand3<0.33){
    third = "Bros";
}
else if(rand3<0.66 && rand3>=0.33){
    third = "Limited";
}
else{
    third = "Hub";
}

console.log(`Your business name is: ${first} ${second} ${third}`);

