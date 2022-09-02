console.log("helloworld")
 // the while loop
 //the syntax
 // while loop
 let a = 0;
 while (a < 10){
    console.log(a)
    a++
 }

 let arr = [11, 12, 13, 14, 15, 16 ,17, 18, 19, 20];
 let res =[];
 let b = 0;

 while (b < arr.length){
    if (arr[b] % 2 === 0){
        res.push(arr[b]);

    }
    b++
 }
 console.log(res)



 // do while loop
//  let =0;
//  do {
//     console.log(arr[d.length]);
//     c++
//  }while(c <arr.length)


// for loop
// for(initialization; CSSConditionRule; increment/decreament){
//     //expression
// }
let arr2 =[
        "abley",
        "back",
        "acghy",
        "balck",
        "bank",
        "aery",
        "bark",
        "agly"
]
let res2 = [];
for ( let i = 0; i < arr2.length; i++){
    if (arr2[i].endsWith("k")){
        res2.push(arr2[i]);

    }
}console.log(res2)

// of of looop
 for( let arr of arr2){
    if (arr.endsWith("k")) console.log(arr)
 }















