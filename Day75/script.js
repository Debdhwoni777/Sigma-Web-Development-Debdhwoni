console.log("Dhwoni is a Haker");
console.log("Sunny is a Haker");
setTimeout(()=>{
    console.log("Deb is a boy");
},2000);
console.log("Hey I am A haker");
console.log("Hey you are a Haker");

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}

