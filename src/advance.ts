//TYPE ALIASES=make type of notation 

type Employee={//isn't shown in js
    readonly id:number,//cannot change id
    myName:string,
    retire:(date:Date)=> void
    }

let employe:Employee={
    id:1,
    myName:'Roshan',
    retire:(date:Date)=>{
        console.log(date);
    }
}

//UNION TYPES=fucntion parameter can be of many types

function multiply(input:number | string):number{
    if (typeof input ==='number'){
        return input*2;
    }else{
        return parseInt(input)*3;
    }
} 
multiply(8)
multiply('8')

//INTERSECTION= used to merge multiple types

type A={
    move:()=> void
}
type B={
    dance:()=> void
}
type C=A & B;

let boy:C={
    move:()=>{},
    dance:()=>{}
}

//  LITERAL TYPES

type Quantiy= 10 | 100;

let num:Quantiy=10;

type Metric ='cm' | 'inch';


//NULLABLE TYPES

function greet(name: string | null | undefined){
    if(name)
        console.log(`hi ${name}`);
    console.log('null or undefined');        
}
greet(undefined)
greet(null)

//OPTIONAL CHANNING

type Customer={
        birthday:Date
}

function getCustomer(id:number | null | undefined){
    return id === 0 ? null : {birthday: new Date()}
}

let customer =getCustomer(0);
// if (customer !==null && customer !==undefined){
//     console.log(customer.birthday);
// }
console.log(customer?.birthday);// Optional property access operator
//customer xa vane execute garxa natrw undefined dinxa

//Optional element access operator
//customers?.[0]//if index 0 is not null in given array then it executes else displays undefined


//Optional call 
// let log: any=(message:string)=>console.log(message);
let log:any =null;
log?.('a')//this will only be executed if the log is refrering an actual function else will display null or undefined









 





  