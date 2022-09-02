console.log('hello world')
//data type
// const a =infiniity;

//data type Big int
// const c = BigInt(25);

// console.log(typeof(c));
const e = "hello world";
const a = 'javascript';
const d = '2+2 ='+ (2+2);
const h =`hello world the answer to 2+2 = ${2+2}`;
 console.log(h);
// string properties
console.log(h.length);
console.log(h.slice(6));// dot notation 
console.log(h.replace("hello", "home"));

const i = "b" + "a" + (2 * "a") + "a";
console.log(i.toLowerCase());
// data type of boolen
//data type of undifuined
// anything in string formay authomatically becomes a sting 
// //data typr of object
const m = new Object()
m.firstname = "desgede";
m.username = "pardon";
const n = {m};
console.log(n)

const g ={
    "first name": "desmond",
    aunthenticated : false,
    sbc : ["pen","paper",NAN],
    xyz :{ book:"lord"}


};
//bracket notation 
//console.log(n[Authenticated]);
//n["aunthenthicated"]= true;
//n["sbc"][2]=undifined;
//methods of object
// hasownproperty
console.log(g.xyz.hasownproperty("book"));
//to get the properies in an obj
console.log(object.keys(g).length)

// let str = "this is my name"
// let splited = str.splited
// to delete a property
// delete g.sbc
// console.log(g.sbc)

