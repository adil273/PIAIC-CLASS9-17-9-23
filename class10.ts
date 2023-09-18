// import inquirer from "inquirer"
// console.log("FIRST")
// async function test1(){
//     await inquirer.prompt([{
//         type:"number",
//         name:"NUM 1 = ",
//         message:"Enter Number 1 value = "
//     }])
//     console.log("TWO")
// }
// test1();
// console.log("THREE")
                    ///////////////////////////////////

// import inquirer from "inquirer"
// async function test2(){
//     await inquirer.prompt([{
//         type:"number",
//        // name:"NUM 2 = ",
//         message:"Enter number value of 2 = "
//     }])
//     .then(()=>{
//         console.log("It is true")
//     })
//     .catch((error)=>{
//         console.log("It is false")
//     })
// }
// test2();
//console.log("three")
            //////////////////////////////////////////////////

// import inquirer from "inquirer"
// async function test3(){
//     let score = await inquirer.prompt([{
//         name:"grade",
//         type:"number",
//         message:"Enter marks of student = "
//     }]);
//     if(score.grade<50){
//         console.log("grade F",score.grade)
//     }
//     else if(score.grade>=51 && score.grade<=75){
//         console.log("grade B",score.grade)
//     }
//     else if(score.grade>=76 && score.grade<=100){
//         console.log("grade A",score.grade)
//     }
//     else{
//         console.log("Value Range Exceed 0-100 ")
//     }
// }
// test3();

        //////////////////////////////////////////

// import inquirer from "inquirer";
// async function testcall(){
//      var result1 = await inquirer.prompt([{
//         type:"number",
//         name:"num1",
//         message:"enter num1"
//     }])
//     result1.then((success)=>{   
//         console.log("promise fulfil result 1",success);
//         })
//   .catch((err)=>{
//         console.log("error",err)
//    })
    //console.log("result",result)
    // var result2 = inquirer.prompt([{
    //     type:"number",
    //     name:"num2",
    //     message:"enter num2 for result 2"
    // }])
    // result2.then((success)=>{   
    //       console.log("promise fulfil result 2",success);
    //       })
    // .catch((err)=>{
    //       console.log("error",err)
    //  })
// }
// testcall()
/////////////////////////////////---IMPORTANT------///////
// import inquirer from "inquirer"
// async function test4(){
//     var a =   await inquirer.prompt([{
//         name:"a",
//         type:"number",
//         message:"Enter value for a"
//     }])
//     a.then(()=>{
//         console.log("SUCCESS in A")
//     })
//     a.catch((err:number)=>{
//         console.log("ERROR in A",err)
//     })
//     var b =  await inquirer.prompt([{
//         name:"b",
//         type:"number",
//         message:"Enter value for b"
//     }])
//     b.then(()=>{
//         console.log("SUCCESS in B")
//     })
//     b.catch((err:number)=>{
//         console.log("ERROR in B",err)
//     })
// }
// test4();
///////////----important-----////////
// import inquirer from "inquirer"
// import data from "./data.json" assert{type:"json"}
// for(let i:number=0;i<data.length;i++){
//     console.log(data[i]);
// }
////////////////-------DATA FILE IMPORT----//////////
// //  ERROR HANDLING
// //  SYNTAX ERROR
//         //fora,letc,console4
//         //help from VS code, node, typescript

// //  RUN TIME ERROR
    //credit card error in online purchasing
    //payment,file upload, internet code
    // import inquirer from "inquirer"
    // try{
    //     console.log("before inquirere")
    //     const output = await inquirer.prompt([{
    //         type:"number",
    //         name:"num1",
    //         message:"enter number"
        
    //     }])
    //     if(output.num1>100 || output.num1<0){
    //         throw new Error("pls share value 0-100")
    //     }        
    //     console.log("try block after inquirer")
    // }
    // catch(error){
    //     console.log("error is here",error)
    // }
    // finally{
    //     console.log("either try block okey or not finally will operate")
    // }
    // console.log("line 34")

    // import inquirer from "inquirer"
    // try{
    //     const output = await inquirer.prompt([{
    //         name:"hello",
    //         type:"number",
    //         message:"enter value = "
    //     }])
    //     if(output.hello > 0 || output.hello < 100){
    //         throw new Error("pls share value 1-100");   
    //     }
    //     console.log("value is in rnage");
        
    // }
    // catch(error){
    //     console.log("there is error")
    // }
    // finally{
    //     console.log("finally will operate with try block")
    // }
//  LOGICAL ERROR
// var num1:number=10;
// var num2:number=20
// var sum:number=num1*num2;
// console.log("sum",sum)
// created by humans solved by humans, such as testing engineering, pull request on github
