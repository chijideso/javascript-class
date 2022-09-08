 console.log("hello world")

document.title = "dom javascript"

document.body.style.backgroundColor = "black";
document.body.style.color = "white";

let bodycontent = document.body.childNodes;
//the childNodes get all the nonde inside tyhe body including new line
for(let i =0; i< bodycontent.length; i++){
    if ( i % 2 != 0){
        console.log(bodycontent[i])
    }
}
// children get all the element in the body without new line

let bodychildren = document.body.children;
console.log(bodychildren)

let firstchild = document.body.firstchild;
let lastchild = document.body.lastchild;