// Element.attribute
// setAttribute()
// styling
// form handling
// classlist
// addclass
// removeclass

let item = document.getElementById("abc")
console.log(item)
let tag = document.getElementsByTagName("img")[0]
// this  is a property way

// tag.alt="my image"
// tag.src="./IMG_-8rju6p (3).jpg"
// tag.className="image"
// tag.id = "img"
// console.log(tag)
// tag.style = "border-radius: 100%; height:200px; width: 200px;"
// tag.style.borderRadius="100%"
// tag.style.height="200px";
// tag.style.width="200px";
// tag.style.border="3px solid red";



// the method way using set attribute
tag.setAttribute('alt', 'my image')
tag.setAttribute('class', 'image')
tag.setAttribute('id', 'img')
tag.setAttribute("src", "./IMG_-8rju6p (3).jpg")

tag.setAttribute("style","border-radius: 100%; height:200px; width: 200px;" )

let list = document.querySelectorAll(".item")
for ( let i = 0; i < list.length;i++){
    if(i % 2 == 0){
       list[i].style.backgroundColor="gray" 
    }
    else if (list[i].innerText.startsWith("p")){
        list[i].style.backgroundColor="blue"
    }
    else{
        list[i].style.backgroundColor="purple"
    }
}




