// console.log("hello world")
// method that can be used to serach dom
// getElementbyId()
// getElementsByClassName()
// getElementsbyTagName()



// getElementbyId
// gets only one elements
let iditem = document.getElementById("abc")
// console.log(iditem)
// console.log(document.getElementById("abc"))
//ca
let elment= document.getElementsByClassName("item")
// console.log(elment[4]) //to get a specific index item
// console.log(elment) // to get all html item
// console.log(elment[elment.length - 1]) //to make it dynamic so when ever an item is mitakenly added it will always grt the last item


//get ElementsByTagname gets all the elements with same tag names
let tag  = document.getElementsByTagName("li")
    // console.log(tag)

// queryselector only returns one elemnt usually the firest one it finds
//it uses css selector to get elements
// this if for id
let queryselector = document.querySelector("#abc")
//   console.log(queryselector)

  // this is for class name
let queryselector1 = document.querySelector(".item")
//   console.log(queryselector1)
  //this is for tagname
let queryselector2 = document.querySelector("p")
//   console.log(queryselector2)

  // we can chain sellections just like css
  let selectQ = document.querySelector(".section2 .item")
   console.log(selectQ)

   //to select all class using querySelectorAll
  let selectall = document.querySelectorAll(" .item")
   console.log(selectall)