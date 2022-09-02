console.log("helloworld")
 // the while loop
 //the syntax
 // while loop
 let a = 0;
 while (a < 10){
    colsole.log(a)
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