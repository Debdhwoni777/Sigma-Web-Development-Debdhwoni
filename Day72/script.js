// let boxs = document.getElementsByClassName("box")
let boxs = document.querySelector(".container").children

function getRC(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxs).forEach(e=>{
    e. style.backgroundColor = getRC();
    
})