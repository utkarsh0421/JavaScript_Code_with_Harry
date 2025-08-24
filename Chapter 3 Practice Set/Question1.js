// Question 1 : Program to print the marks of the students


let marks = {
    harry : 98,
    rohan : 70,
    aakash : 7
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log(Object.keys(marks)[i]+ " : " + marks[Object.keys(marks)[i]])
}