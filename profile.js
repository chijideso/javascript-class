var contacts = [
    {
        "firstname": "akira",
        "lastname": "desmond",
        "number": "08108659756",
        "likes": ["pizzas", "coding", "soccer"]
    },
   
    {
        "firstname": "harry",
        "lastname": "victor",
        "number": "07108659756",
        "likes": ["semo", "design", "vollyball"]
    },
    {
        "firstname": "oka",
        "lastname": "chijioke",
        "number": "07036902510",
        "likes": ["rice", "beans", "eba"]
    },
   
]

function profile(name, prop){
    for (var i= 0; i < contacts.length; i++){
        if (contacts[i].firstname === name){
            return contacts[i][prop];
        }
    }
    return "no such contacts"
}
var data = profile("oka", "number");
// console.log(data);

// convert to int
// function convertToInteger(str){
//     return parseInt(str)
// }
// convertToInteger("100011");
// console.log(parseInt)

// function equal(a, b){
//     if(a === b){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// equal(3, 3);
// console.log(equal)

//ternary oprator

function sign(num){
    return num > 0 ?"positive" : num < 0 ? "nagative" : "zero"
}
// console.log(sign(7))

//arrow function
var arrow =(arr1, arr2) => arr1.concat(arr2);
// console.log(arrow([2,3], [4,5]));

const numarry = [4, 5.6, -9.4, 3.14, 42, 6, 8.34, -2];
const square = (arr) => {
    const squareint = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squareint;
}
const squareint = square(numarry);
// console.log(squareint);

const increment = (function(){
    return function increment(number, value = 1){
        return number + value;

    };
})();
// console.log(increment(5, 6));


//rest arguments
//syntax (...)
const sum = (function(){
    return function sum(...args){
        return args.reduce((a, b) => a + b);
    };
})();
// console.log(sum(2, 3, 4));


//  asigning value taking directly from object to variables
var voxel = {x: 3.6, y: 2.4, z: 3.5};
    var x = voxel.x;
    var y = voxel.y;
    var z = voxel.z;
    const { x : a, y : b, z : c} =voxel;
     console.log(x,y,z);

