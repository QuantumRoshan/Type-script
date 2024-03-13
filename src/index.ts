let sales=2_34_6768;
let nameOf: string='don';
let c:any=8;
c='roshN';
console.log(c);
 
// ARRAYS

let array: any[] =[1,2,3,4,5];
array.forEach((e,i,a)=>{
    a[i]=e.toString();
})
console.log(array);


// TUPLES

let abc:[number, string]=[1,'don']


// Enums

const small=1;
const medium=2;
const large=3;


const enum Size{Small=1, Medium, large};//same data type
let tSirt=Size.Medium;
console.log(tSirt);


// FUNCTION

// 1.always properly annotate functions, parameters and return types
// 2. enable "noUnusedLocals": true,"noUnusedParameters": true,"noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */

function calulateAge(salary:number,age=24,):number{
    return age*salary;
}

calulateAge(700000,19);
               

// OBJECTS

// to make properity optional you can add ? after it

let employee:{
    readonly id:number,//cannot change id
    myName:string,
    retire:(date:Date)=> void
}={
    id:1,
    myName:'Roshan',
    retire:(date:Date)=>{
        console.log(date);
    }
}


