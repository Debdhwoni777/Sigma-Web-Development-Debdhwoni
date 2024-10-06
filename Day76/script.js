// async function getData(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(450)
//         },3500)
//     })
// }
async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let date = await x.json()
    console.log(x);
    return 555
}
async function main(){
    console.log("Lodeing now");
    console.log("Load Data");
    let data = await getData()
    console.log(data);
    console.log("Your Data is load");
    console.log("Wait...");
}
main()
// data.then((v)=>{
//     console.log(data);
// })

