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