let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mult = document.getElementById("mult");
let div = document.getElementById("div");

let input1 = document.getElementById("firstNum");
let input2 = document.getElementById("secNum");

let result =  document.getElementById("result")


let inputOne = parseFloat(input1.value)
    let inputTwo = parseFloat(input2.value)


console.log(inputOne)

let hai = 10;

// console.log(hai);

add.addEventListener("click",function(inputOne,inputTwo){
    // let inputOne = parseInt(input1.value)
    // let inputTwo = parseInt(input2.value)
    // let ans = inputOne + inputTwo 
    result.textContent = inputOne.value + inputTwo.value
    console.log( inputOne + inputTwo);
    console.log(hai);
})

sub.addEventListener("click",function(){
    // let inputOne = parseInt(input1.value)
    // let inputTwo = parseInt(input2.value)
    result.textContent = inputOne - inputTwo
    console.log(inputOne - inputTwo);
})

mult.addEventListener("click",function(){
    // let inputOne = parseInt(input1.value)
    // let inputTwo = parseInt(input2.value)
    result.innerText = inputOne * inputTwo
    console.log(inputOne * inputTwo);
})

div.addEventListener("click",function(){
    let inputOne = parseInt(input1.value)
    let inputTwo = parseInt(input2.value)
    result.textContent = inputOne / inputTwo
    console.log(inputOne / inputTwo);
})


// new method

// let add = document.getElementById("add");
// let sub = document.getElementById("sub");
// let mult = document.getElementById("mult");
// let div = document.getElementById("div");

// let input1 = document.getElementById("firstNum");
// let input2 = document.getElementById("secNum");

// let result =  document.getElementById("result")

// let inputOne, inputTwo; 
//  function updateInputs() {     
//     inputOne = parseInt(input1.value);    
//      inputTwo = parseInt(input2.value); } 

//       add.addEventListener("click", function () {
//         updateInputs();
//         result.textContent = inputOne + inputTwo;
//         console.log(inputOne + inputTwo);
//       });
