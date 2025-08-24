
//Question 1: Find whether age is between 10 and 20
let age = prompt("Entre your age : ")
if(age >= 10 && age <= 20){
    console.log("You age is between 10 and 20.")
}


//Question 2:Demostrate use of switch case
let marks = prompt("Entre your mark : ")
switch(true){
    case (marks>=90):
        console.log("Grade A");
        break;

    case (marks >= 80 && marks < 90):
        console.log("Grade B");
        break;
    
    case (marks >= 70 && marks < 80):
        console.log("Grade C");
        break;

    case (marks >= 60 && marks < 70):
        console.log("Grade D");
        break;

    default:
        console.log("Grade E");
        break;
}


//Question 3:Program to know whether a number is divisible by 2 and 3
let num = prompt("Entre a number : ")
if(num%2==0 && num%3==0){
    console.log("Number is divisible by 2 and 3.")
}else{
    console.log("Number is not divisible by 2 and 3.")
}


//Question 4:Program to know whether a number is divisible by 2 or 3
let num1 = prompt("Entre a number : ")
if(num1%2==0 || num1%3==0){
    console.log("Number is divisible by 2 or 3.")
}else{
    console.log("Number is not divisible by 2 or 3.")
}


//Question 5:Print you can drive or not using ternary operator
let age1 = prompt("Entre your age : ")
(age1>=18)? "You can drive." : "You can't drive.";