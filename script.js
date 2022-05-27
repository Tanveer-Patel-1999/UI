
//    document.getElementById("count-el").innerText =5

// 1.ways to print in javascript
console.log("Hello World");
//alert("me");
//document.write("This is document write");
//2. JavaScript console API
// console.log("Hello World",4+6,"Another log");
//alert("me");
//document.write("This is document write");
// console.warn("this is a warning")
// console.error("this is an error")
//console.assert(4==4) we should write this in console of inspect element


//3. JavaScript Variable
var number1 = 34;
var number2 = 56;
// console.log(number1+number2)


//4. DataTypes in JavaScript
// Numbers

var num1 = 455;
var num2 = 56.76;
//String

var str1 = "This is a String";                  //We can write string in single quotes 
var str2 = 'This is also an String';            //As well as duble quotes

// Objects

var marks = {
    ravi: 34,
    shumbham: 78,
    harry: 97
}

//    console.log(marks);

//boolean

var a = true;
var b = false;
//    console.log(a,b);

//undefined

//var und=undefined;             //There is no assign value to undefined variable 
var und;                         //Once you define variable undefined it automatically assign undefined value to variable
console.log(und);

//null
var n = null;
//    console.log(n);


/*
At a very high level,there are two types of data types of data types in JavaScript
1. Primitive Data Types :undefined,null,,number,string.boolean,symbol
2. References data types :Arrays and Objects

*/
//var arr = [1, 2, "String", 3, 4, 5]


//Operators in JavaScript
//Arithmetic Operators


var a = 100;
var b = 10;
//    console.log("The value of a + b is :",a+b);
//    console.log("The value of a - b is :",a-b);
//    console.log("The value of a * b is :",a*b);
//    console.log("The value of a / b is :",a/b);

//Assignment operators
var c = b;
//    console.log(c);
c += 2
//    console.log(c);
c -= 2           //c=c-2
//    console.log(c);

//Comparision Opearators
var x = 34;
var y = 56;
//    console.log(x == y); 
//    console.log(x >= y);
//    console.log(x <= y);
//    console.log(x < y);


//Logical Operators
//Logical AND
//    console.log(true && true);
//    console.log(true && false);
//    console.log(false && false);
//    console.log(false && true);

//LOgical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

//Logical NOT

//    console.log(!true);
//    console.log(!false);

//JavaScript Functions

function avg(a, b) {
    return (a + b) / 2;
}

//    c1 = avg(4,6);
//    c2 = avg(14,16);
//    console.log(c1);
//    console.log(c2);
//    document.write(c1);

//Conditional Statements 
//If else
//var age = 21;
//    if(age > 18){
//         console.log("You can vote");
//    }
//    else{
//        console.log("You cannot vote");
//    }

//If-Else-If
//    var age = 59;
//    if(age > 2 && age < 18){
//        console.log("you are not a kid");
//    }
//    else if(age > 18 && age <56){
//        console.log("You are young");
//    }
//    else{
//        console.log("you are not young");
//    }

// function ifel(age){

//    if(age > 2 && age < 18){
//        console.log("you are not a kid");
//    }
//    else if(age > 18 && age <56){
//        console.log("You are young");
//    }
//    else{
//        console.log("you are not young");
//    }

// }
// c=ifel(21);
// console.log(c);


//Conditional Statements
//1. For loop
// var arr=[1,2,3,4,5];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// 2. For Each Loop
// var arr=[10,20,30,40,50,60,70]
// arr.forEach(function(element){
//     console.log(element);
// })

// 3 . While Loop
// let j = 0;
// const ac = 0;
// ac = ac + 1;
// let j = 0;
// while(j < arr.length){
//     console.log(j);
//     j++
// }
// let j=0;
// do{
//     console.log(arr[j]);
//     j++
// }while(j < arr.length);


//Break and Continue Statement

// var arr=[1,2,3,4,5,6,7];
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         //break;
//         continue;        
//     }
//     console.log(arr[i])
// }


// ArrayMethods

// let myArr =["Fan","Camera",34,null,true];
// console.log(myArr.length);
// myArr.pop();
// console.log(myArr);
// myArr.push("Sameer");
// console.log(myArr);
// myArr.shift();
// console.log(myArr);
// myArr.unshift();
// console.log(myArr);
// myArr.unshift("Azr");
// console.log(myArr)
// const newLen = myArr.unshift("Arb");
// console.log(newLen);
// console.log(myArr);
// console.log(myArr.toString());
// console.log(myArr.sort());


// let s="Sameer is a good boy Sameer";
// console.log(s.length);
// console.log(s);
// console.log(s.indexOf("Sameer"));
// console.log(s.indexOf("boy"));
// console.log(s.lastIndexOf("Sameer"));
// console.log(s.slice(1,6));
// console.log(s.replace("Sameer","Arib"));

// JavaScript Dates
// let myDate = Date();
// console.log(myDate);
// console.log(myDate.getTime);
// console.log(myDate.getFullYear);
// console.log(myDate.getDay);
// console.log(myDate.getTime);


//DOM manipulation

// let elem =document.getElementById('click');
// console.log(elem);
// let elemClass =document.getElementsByClassName("container")
// console.log(elemClass);
//elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success") 
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn =document.getElementsByTagName('button');
// console.log(tn);    
// tn1= document.getElementsByTagName('div');
// console.log('tn1'); 
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created paragraph";
// tn1[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold";
// tn1[0].appendChild(createdElement2);
// //tn1[0].replaceChild(createdElement2,createdElement);
// removeChild(createdElement2);
 
// function clicked(){
//     console.log('Button was clicked');
// }
 window.onload = function(){
       console.log('The document is loaded');
  }
//   firstcontainer.addEventListener('click',function(){
//       document.querySelectorAll('.container')[1].innerHTML ="<b> We have clicked </b>"
//       console.log("Clicked on Container")
//   })
// firstcontainer.addEventListener('click',function(){
//     console.log("Click done")
// })
// firstcontainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// })
// firstcontainer.addEventListener('mouseout',function(){
//     console.log("mouse out container")
// })
let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
firstcontainer.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("mouse up when clicked on container")
})
firstcontainer.addEventListener('mouseout',function(){
    document.querySelectorAll('.container')[1].innerHTML ="<b> We have clicked </b>"
    console.log("mouse down when clicked on container")
})
