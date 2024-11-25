let a = "People"

switch(a){
    case "Animals":
        console.log(a);
        break;
    case "People":
        console.log("Redd");
        break
}

// Ternary
let isBirthday = true
const greeting = isBirthday
    ? "Happy birthday" // if True
    : "Good Morning"; // if false

console.log(greeting);