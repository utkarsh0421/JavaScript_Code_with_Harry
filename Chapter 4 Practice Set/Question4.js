//Question 4: Extract the amount out of the string

let name = "Please give me Rs 1000"

let amount = name.slice("Please give me Rs ".length)
console.log(amount)