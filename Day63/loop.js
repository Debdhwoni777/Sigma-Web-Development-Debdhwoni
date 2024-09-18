let a = [1,2,3,4,5,6,7,8,9,10];
// for(i=0; i<a.length; i++){
//     const e = a[i];
//     console.log(e);
// }
// a.forEach((value , index , arr)=>{
//     console.log(value , index , arr)
// })
// for(i of a){
//     console.log(i)
// }
// let a2 =[]
// for (let i = 0; i < a.length; i++) {
//     const e = a[i];
//     a2.push(e**2)
// }
// let arr = a.map((e)=>{    
//     return e**2
// })
// console.log(arr)
let arr2 = [1,2,3,4,5,6,7];
const red = (a , b)=>{
    return a*b
}
console.log(arr2.reduce(red))
