// function is used for block of reusuable code
function greet(a ,b){
    console.log(`hello ${a}`);
    console.log(`hello ${b}`);
}
console.log(greet("venkat","ramana"));


// function declaration 
function greet(a,b){
    console.log(a+b);
}

// anonymous funcion means without function
var result=function(a,b){
    console.log(a+b);
}
result(30,9);
console.log(result);



// immediate function or invoked immediately
(function(a,b){
    console.log(a*b);
})(6,8);


console.log(venkat);
var venkat="ramana";


greet(19,9);
function greet(a,b){
    console.log(a+b);
}
favname("venkat","ramana");
function favname(a,b){
    console.log(a+b);
 }


 var name="venkat";//global variables
 if(true){
    var name="ramana";//rewrite-assigning same variable  so its overwrites the previous
    console.log(name); //now its cherkupally is updates as global
 }
 console.log(name);//now its updated global variable as "cherkupally";


 //we preserve the global variable with creating new variable let 
 var name="venkat";//global venkat
 if(true){
    let name="cherkupally";//block-scoped
    console.log(name);//cherkupally
 }
 console.log(name);//global venkat


 let age=24;
 console.log(`I am ${age} old`);

 console.log(
`my self venkatramana
i have come from this 21st universe,
it was greedy peoples`);

//default parameter
function myName(a=6,b=9){
    console.log(a+b);
}
myName(1,1);



let num=(a)=>console.log(`the multiplying of ${a}  is ${a*a}`);
num(10);