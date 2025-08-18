// Chapter 1 Question 1:Create a variable of type string and try to add a number to it.
let a = "Code"
let b = 4
console.log(a+b)


// Chapter 1 Question 2:Use typeof operator to print type of variable in above
console.log(typeof (a+b))


// Chapter 1 Question 3:Create a connstant oblect in js, can you change it to hold a number to it.
const aa = {
    name : "Logan",
    age : 183,
} // we can't modify name or age


// Chapter 1 Question 4:add a new key to the const obj in question 3
aa['actor'] = "Hugh Jackman"
console.log(aa)


// Chapter 1 Question 5:create a word meaning dictionary of 5 words
const dict = {
    "Street" : "Colony",
    "Freedom" : "Live freely",
    "Friendship" : "Permanent roster",
    "BestFriend" : "Bachpan ka dost"
}

console.log(dict)