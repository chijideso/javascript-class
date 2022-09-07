// console.log("hello world");
// the if statement 
// the else
// the elseif
// the switch
// the tenary operator


// if statement 
// if (condtion) {
    // expression
    // will only run if result is true
// }

let a = "wednesday";
let b = "september";
if (a == "wednesday" && b == "june") {
    //console.log(true)
} else {
    // console.log(false)
}

// the if else
// it checks fpr another condition when the previos condition if false

if (a == "wednesday" && b == "june") {
    //console.log(true)
} else if (a == "wednesday" && b != "june") {
    console.log(true)
}
else if (a == "wednesday" && b != "september") {
    console.log(true)
}
else {
    console.log("none of the above")
}
//  switch statement
//  another way to write if statement
//  syntax
// switch (condition) {
    // case 1:
        // expression
//         break;
//     default:
//     // expression    

// }

let score = 55;
switch (true) {
    case score >= 80:
        console.log("A");
        break;
    case score >= 60:
        console.log("B");
        break;
    case score >= 50:
        console.log("c");
        break;
    case score >= 40:
        console.log("D");
        break;
    default:
        console.log("F");      
    }
    

// tenary
let c = "bookk";
let d = c === "book" ? true : false;

// console.log(d)
