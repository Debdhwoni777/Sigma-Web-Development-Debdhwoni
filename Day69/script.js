//                    *****Factorial---Function*******   
let a = 3;

function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    console.log(arr.slice(1,));
    let c= arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })
    return c;
    
}
factorial(a)