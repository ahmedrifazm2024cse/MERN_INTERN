function namedfunc(){
    console.log("Namedfunction called");
    console.log("Namedfunction called");
}
namedfunc();

let funcExp=function(){
    console.log("Function expression called");
};
funcExp();

let arrow=()=>
{
    console.log("Arrow function called");
};
arrow();

(()=>{
    console.log("IIFE");
    console.log("IIFE called");
    console.log("IIFE executed");
}
)();

const add =()=>
{
    let a =10;  
    let b=20;
    console.log("The Sum is ",a+b);
}
add();
//repeat calls
add();
add();
add();

const addTwoNumbers =(num1,num2)=>
{
    console.log("The Sum is ",num1+num2);
}
addTwoNumbers(10,20);
addTwoNumbers();

const addMultipleNumbers =(...numbers)=>
{
    let sum =0;     
    for(let number of numbers)
    {
        sum +=number;
    }           
    console.log("The Sum is ",sum);
}
addMultipleNumbers(10,20,30,40,50);