
 //Problem 1:
const sandwitch_calculator=(bread)=>{

    return bread/2;
    
    }
    
    console.log(sandwitch_calculator(20));
    
    
    
    sandwitchwith_cheese=(bread,cheese)=>{
    
        if (bread / 2 > cheese)
    
         return cheese; 
    
    }
    
console.log(sandwitchwith_cheese(8,2));

//Problem 2:

var student = {

    name : "David Rayy",

    sclass : "VI",

    rollno : 12 };

    var keys= Object.keys(student);

    console.log("the properties are ",student);



//Problem 3:

console.log("before deleting student rollno  ",student);

delete student.rollno;

console.log("after deleting student rollno  ",student);    
