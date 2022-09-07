let day = "monday"; //global scoped
// let day = "tuesday";

const printDay = () =>{
    let day = "tuesday"; //function scoped
    console.log(day)
}
printDay()
console.log(day)


//when a variable is reasiguned in a function the global variable get reasigned/ changed 
//whev the function is called

//a variabke declared in a function is a function scoped and is not accesible to any
 //expression oourtside of the function 