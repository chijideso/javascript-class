// console.log("hello world")
//modifying ellemrnt in HTML
//innerHTML
//innerText
//append
//prepend
//insertbefore



// create Element  method creat Elementbuut doesnt insert to the dom
const newElem = document.createElement("header");
// adding text into the new element 
newElem.innerHTML ="<strong>Hello world</strong>";
// newElem.innerText ="<strong>Hello world<strong/>"
console.log(newElem);
document.body.append(newElem);

const newImage = document.createElement("IMG");
newImage.src = "./IMG_-8rju6p (3).jpg"

document.body.prepend(newImage);

const gogglelink = document.createElement("a");
 gogglelink.innerHTML="<p>visit goggle</p>"
 gogglelink.href="https://goggle.com"
 gogglelink.target="_blank"
 console.log(gogglelink)
document.body.prepend(gogglelink);

// const para = document.querySelector("p");
// document.body.insertBefore(gogglelink, para)


//  removing an element

// const h1 = document.querySelector("h1");
// h1.remove()